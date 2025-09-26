const styles = {
  section: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(120deg,#effafc 50%,#f4f9fd 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  sectionTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "1.5rem",
    letterSpacing: 1
  },
  sectionSubtitle: {
    textAlign: "center",
    color: "#0d9488",
    marginBottom: "2.4rem",
    fontStyle: "italic"
  },
  imgWrap: {
    width: "100vw",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center"
  },
  dataFlowImg: {
    width: "100vw",
    height: "auto",
    maxWidth: "100vw",
    background: "none",
    boxShadow: "none",
    borderRadius: 0,
    display: "block",
    margin: 0
  },
  videoSection: {
    width: "100%",
    maxWidth: 770,
    margin: '2rem auto',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem",
    background: "transparent" // << KEY CHANGE: force fully transparent
  },
  videoTitle: {
    fontWeight: 600,
    color: "#1e293b",
    marginBottom: "0.8rem",
    textAlign: "center"
  },
  videoFrameWrap: {
    width: "100%",
    aspectRatio: "16/9",
    maxWidth: 670,
    background: "transparent", // << KEY CHANGE: keep even inner Box transparent
    boxShadow: "none",
    border: "none"
  }
};

export default styles;
