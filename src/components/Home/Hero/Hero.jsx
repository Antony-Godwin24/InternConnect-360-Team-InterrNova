// Hero.js
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { PlayArrow, HowToReg } from "@mui/icons-material";
// Replace with your team's logo or representative image
import teamPortrait from "../../../assets/team-portrait.jpg";
import styles from "./style";

const Hero = () => {
  return (
    <Box sx={{ ...styles.heroSection, marginTop: "0" }} id="home">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={styles.heroContent}>
              <Typography variant="h1" sx={styles.heroTitle}>
                InternConnect 360<br />
                <span style={{ color: "#ffd700" }}>For PM Internship Portal</span><br />
              </Typography>
              <Typography variant="h5" sx={styles.heroSubtitle}>
                <b>By The Team <span style={{color:'#ffd700',fontWeight:'bolder'}}>InterrNova</span></b><br />
                <b>AI-Based Internship Recommendation Engine for PM Internship Scheme</b>
                <br />
                Empowering students with smart, multilingual and inclusive recommendations for government internships. Discover the right opportunities for your professional growth!
              </Typography>
              <Box sx={styles.heroButtons}>
                <Button
                  variant="contained"
                  sx={styles.primaryButton}
                  startIcon={<HowToReg />}
                  size="large"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  sx={styles.secondaryButton}
                  startIcon={<PlayArrow />}
                  size="large"
                >
                  See Data Flow
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <img
                src={teamPortrait}
                alt="InterNova Team"
                style={styles.profileImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sx={{marginLeft:'100px'}}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>2025</Typography>
                    <Typography sx={styles.statsLabel}>
                      Smart India Hackathon
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>6</Typography>
                    <Typography sx={styles.statsLabel}>
                      Team Members
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>AI-Powered</Typography>
                    <Typography sx={styles.statsLabel}>
                      Recommendations
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
