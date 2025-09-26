const styles = {
  section: {
    py: 8,
    background: 'linear-gradient(135deg, #eaf6f6 0%, #f8f9fa 100%)',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 2,
    color: '#008080',
    letterSpacing: 2,
    fontFamily: 'Playfair Display, serif',
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#26898d',
    mb: 6,
    fontStyle: 'italic',
    fontFamily: 'Open Sans, sans-serif',
  },
  planCard: {
    height: '100%',
    width: '100%',
    minHeight: '350px',
    boxShadow: '0 6px 20px rgba(0,128,128,0.11)',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    '&:hover': {
      transform: 'translateY(-8px)',
      borderColor: '#008080',
      boxShadow: '0 12px 30px rgba(0,128,128,0.16)',
    },
  },
  planIcon: {
    fontSize: '3.5rem',
    color: '#008080',
    mb: 2,
  },
  planTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    mb: 2,
    color: '#008080',
    letterSpacing: 1,
  },
  planDescription: {
    fontSize: '1rem',
    color: '#434343',
    mb: 3,
    lineHeight: 1.6,
  },
  plans: {
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalsList: {
    mt: 2,
  },
  goalItem: {
    py: 0.5,
    px: 0,
  },
  goalIcon: {
    color: '#4caf50',
    minWidth: '32px',
  },
  goalText: {
    fontSize: '0.95rem',
  },
  priorityChip: {
    mt: 2,
    fontWeight: 'bold',
  },
  progressSection: {
    mt: 4,
    p: 3,
    backgroundColor: 'rgba(0,128,128,0.05)',
    borderRadius: 2,
  },
  progressTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#008080',
    mb: 2,
  },
  progressItem: {
    mb: 2,
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 1,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    background: 'linear-gradient(90deg, #008080 70%, #1565c0 100%)',
  },
};

export default styles;
