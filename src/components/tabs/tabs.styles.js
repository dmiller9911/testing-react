import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  tabs: {
    display: 'flex',
    marginBottom: '1rem'
  },
  tab: {
    flex: '1 1 auto',
    height: '2rem',
    lineHeight: '2rem',
    textAlign: 'center',
    border: '1px solid #00659c',
    borderLeftWidth: '0',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#bee1f4'
    },
    ':first-child': {
      borderLeftWidth: '1px'
    }
  },
  tabActive: {
    backgroundColor: '#00659c',
    color: '#fff',
    ':hover': {
      backgroundColor: '#00659c'
    }
  }
});
