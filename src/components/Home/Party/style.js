const styles = {
  section: {
    marginTop:'0',
    py: 8,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    mb: 2,
    color: "#1565c0",
  },
  sectionSubtitle: {
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#666",
    mb: 6,
  },
  leaderCard: {
    textAlign: "center",
    height: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(21, 101, 192, 0.2)",
    },
    background: "#f9f9fb",
    borderRadius: 6,
  },
  leaderAvatar: {
    width: 90,
    height: 90,
    mx: "auto",
    mb: 2,
    backgroundColor: "#1565c0"
  },
  leaderName: {
    fontSize: "1.15rem",
    fontWeight: "bold",
    color: "#1565c0",
    mb: 1,
    mt: 1,
  },
  leaderPosition: {
    fontSize: "1rem",
    color: "#444",
    mb: 2,
  }
};

export default styles;
