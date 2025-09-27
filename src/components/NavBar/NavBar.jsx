import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery
} from '@mui/material';
import { Home, Info, Group, Explore } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import styles from './style';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';


const InterNovaNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ ...styles.appBar, marginBottom: '0' }}>
      <Container maxWidth="lg">
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h6" sx={styles.logo}>
            <Explore sx={{ mr: 1 }} />
            InternConnect 360
          </Typography>
          <Box
            sx={{
              ...styles.navButtons,
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "0.3rem" : "1rem",
              alignItems: isMobile ? "flex-start" : "center",
              width: isMobile ? "100%" : "auto",
              marginTop: isMobile ? "0.5rem" : 0
            }}
          >
            <Button
              sx={styles.navButton}
              startIcon={<Home />}
              component="a"
              href="#home"
            >
              Home
            </Button>
            <Button
              sx={styles.navButton}
              startIcon={<Info />}
              component="a"
              href="#about"
            >
              About
            </Button>
            <Button
              sx={styles.navButton}
              startIcon={<Explore />}
              component="a"
              href="#features"
            >
              Features
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default InterNovaNavBar;
