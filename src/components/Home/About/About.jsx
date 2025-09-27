import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { School, Work, People, CheckCircle } from "@mui/icons-material";
import styles from "./style";

// Updated achievements and project details
const achievements = [
  "Shortlisted for Smart India Hackathon 2025",
  "Developing multilingual AI-based recommendation engine",
  "Enabling 50,000+ students on pilot phase",
  "Integrating WhatsApp/IVR/SMS for access in rural areas",
  "Promoting inclusive government opportunities",
];

const About = () => (
  <Box sx={styles.section} id="about">
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.sectionTitle}>
        About InterrNova
      </Typography>
      <Typography variant="h6" sx={styles.sectionSubtitle}>
        Team: InterrNova | Idea: InternConnect 360 | CSE Student Innovators
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={8} sx={{ mb: 20 }}>
          <Card sx={styles.card}>
            <CardContent sx={{ p: 4 }}>
              <Typography sx={styles.bioText}>
                The InterrNova team is passionate about designing inclusive tech solutions for social impact. For the 2025 Smart India Hackathon, <b>InternConnect 360</b> was built to empower youth to access and succeed in the <b>PM Internship Scheme</b> using AI-driven recommendations and accessible digital channels.
              </Typography>
              <Typography sx={styles.bioText}>
                With strong collaboration and a CSE background, the team engineered a robust platform supporting multiple languages, optimized for rural and urban needs, and bridging the technology gap for deserving students nationwide.
              </Typography>
              <Typography sx={styles.bioText}>
                As innovators, we believe in open, equitable access for all. InterrNova continues to work with academic leaders, government experts, and local communities to expand opportunities and drive real impact.
              </Typography>

              <Typography variant="h6" sx={{ ...styles.cardTitle, mt: 4 }}>
                Highlights
              </Typography>
              <List sx={styles.achievementsList}>
                {achievements.map((achievement, idx) => (
                  <ListItem key={idx} sx={styles.achievementItem}>
                    <ListItemIcon>
                      <CheckCircle sx={styles.achievementIcon} />
                    </ListItemIcon>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} sx={styles.cards}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={styles.card}>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <People sx={styles.cardIcon} />
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Student Community
                  </Typography>
                  <Typography>
                    50,000+ Students Reached<br />
                    AI-driven support<br />
                    Rural & urban inclusion
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={styles.card}>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Work sx={styles.cardIcon} />
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Innovations
                  </Typography>
                  <Typography>
                    Multilingual Platform<br />
                    WhatsApp/IVR Integration<br />
                    SmartGov Partnerships
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={styles.card}>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <CheckCircle sx={styles.cardIcon} />
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Achievements
                  </Typography>
                  <Typography>
                    National Hackathon Finalists<br />
                    Inclusion Awards<br />
                    University Recognition
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

export default About;
