import { StyleSheet } from 'aphrodite';

const padding = '2rem';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    boxShadow: 'rgba(3, 3, 3, 0.2) 0px 1px 2px 0px'
  },
  cardHeading: {
    padding,
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  headingTitle: {
    flex: '1 1 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    ':not(:last-child)': {
      paddingRight: padding
    }
  },
  cardBody: {
    paddingRight: padding,
    paddingLeft: padding,
    ':last-child': {
      paddingBottom: padding
    }
  }
});
