import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { Email, Phone, LocationOn, Groups } from "@mui/icons-material";
import styles from "./style";
import { Link } from "@mui/material";

const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="lg">
      <Box sx={styles.footerTop}>
        <Box sx={styles.footerLogo}>
          <Groups sx={styles.logoIcon} />
          <Typography sx={styles.logoText}>InterNova Portal</Typography>
        </Box>
        <Box sx={styles.contactInfoWrap}>
          <Box sx={styles.contactItem}>
            <Phone sx={styles.contactIcon} />
            <Link href="tel:+919994982519" color="inherit" underline="hover">
              +91 99949-82519
            </Link>
          </Box>
          <Box sx={styles.contactItem}>
            <Email sx={styles.contactIcon} />
            <Link
              href="mailto:team.internova@gmail.com"
              color="inherit"
              underline="hover"
            >
              team.internova@gmail.com
            </Link>
          </Box>
          <Box sx={styles.contactItem}>
            <LocationOn sx={styles.contactIcon} />
            <Typography>
              K. Ramakrishnan College of Engineering, Trichy, Tamil Nadu
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.footerBottom}>
        <Typography sx={styles.copyright}>
          © 2025 InterNova Portal | Smart India Hackathon
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
