import { testIds as appTestIds } from '~/App';
import { testIds as favoriteToggleTestIds } from '~/components/FavoriteToggle';
import { testIds as parkTestIds } from '~/components/Park';
import { testIds as parkFilterTestIds } from '~/components/ParkFilter';

describe('Park List', () => {
  beforeEach(() => {
    cy.clearLocalStorage().visit('http://localhost:8080/');
  });

  it('Parks can be Favorited and un-favorited', () => {
    const parkAlias = 'park';
    const parkNameAlias = 'parkName';

    cy.getAllByTestId(parkTestIds.root)
      .eq(5)
      .as(parkAlias);

    cy.get(`@${parkAlias}`)
      .within(() => {
        cy.getByTestId(parkTestIds.name);
      })
      .invoke('text' as any)
      .as(parkNameAlias);

    cy.get(`@${parkAlias}`).within(() => {
      cy.getByTestId(favoriteToggleTestIds.button).click();
    });

    cy.getByTestId(appTestIds.showFavoritesOnlyToggle).click();

    cy.getByTestId(parkTestIds.root).should('have.length', 1);

    cy.getByTestId(parkTestIds.root)
      .within(() => {
        cy.getByTestId(parkTestIds.name);
      })
      .invoke('text' as any)
      .then(favoriteParkName => {
        cy.get(`@${parkNameAlias}`).then(originalParkName => {
          expect(favoriteParkName).to.eq(originalParkName);
        });
      });

    cy.getByTestId(parkTestIds.root).within(() => {
      cy.getByTestId(favoriteToggleTestIds.button).click();
    });

    cy.queryAllByTestId(parkTestIds.root).should('have.length', 0);
  });

  it('Filters by Park Name', () => {
    const parkName = 'arc';
    cy.getByTestId(parkFilterTestIds.input).type(parkName);

    cy.getAllByTestId(parkTestIds.root).each($park => {
      cy.wrap($park)
        .within(() => {
          cy.getByTestId(parkTestIds.name);
        })
        .invoke('text' as any)
        .should('match', new RegExp(parkName, 'gi'));
    });
  });
});
