const styles = {
  appBar: {
    background: 'linear-gradient(90deg, #0d9488 0%, #1565c0 100%)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    position: 'fixed',
    zIndex: 1200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '98px'
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '0.5rem 1rem'
  },

  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: 1,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem'
    }
  },

  navButtons: {
    display: 'flex',
    gap: '1rem',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'flex-start',
      marginTop: '0.5rem',
      gap: '0.3rem'
    }
  },

  navButton: {
    color: 'white',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    letterSpacing: 0.5,
    minWidth: '120px',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.13)'
    },
    '@media (max-width: 600px)': {
      width: '100%',
      justifyContent: 'flex-start',
      paddingLeft: '0.5rem',
      fontSize: '0.98rem',
      minWidth: '0px'
    }
  }
};

export default styles;
