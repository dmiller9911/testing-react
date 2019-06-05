type MatcherOptions = import('@testing-library/cypress').MatcherOptions;
type Matcher = import('@testing-library/dom').Matcher;

declare namespace Cypress {
  interface Chainable<Subject> {
    findByTestId<E extends Node = HTMLElement>(
      id: Matcher,
      options?: MatcherOptions
    ): Chainable<E>;
    findByTestId<K extends keyof HTMLElementTagNameMap>(
      id: Matcher,
      options?: MatcherOptions
    ): Chainable<HTMLElementTagNameMap[K]>;
  }
}
