import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DataFlowImg from '../../assets/DataFlow.png'; // Update to your image path
import styles from './style';

const DataFlow = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.section} id="dataflow">
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          ...styles.sectionTitle,
          fontSize: isMobile ? "1.45rem" : "2.8rem"
        }}
      >
        <span
          style={{
            background: "linear-gradient(90deg, #0d9488 65%, #1565c0 95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 800
          }}
        >
          System Data Flow
        </span>
      </Typography>
      <Typography
        sx={{
          ...styles.sectionSubtitle,
          fontSize: isMobile ? "0.97rem" : "1.13rem"
        }}
      >
        How user information moves through the PM Internship Portal
      </Typography>
      <Box sx={styles.imgWrap}>
        <img
          src={DataFlowImg}
          alt="PM Internship Data Flow"
          style={styles.dataFlowImg}
        />
      </Box>
      {/* Subtitle Above Video */}
      <Box sx={styles.videoSection}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            ...styles.videoTitle,
            fontSize: isMobile ? "1.08rem" : "1.25rem"
          }}
        >
          To know about our idea, watch this short demo video!
        </Typography>
        <Box sx={styles.videoFrameWrap}>
          <iframe
            width="100%"
            height={isMobile ? "220" : "380"}
            src="https://www.youtube.com/embed/jya_NBB5v4M"
            title="AI-Based Internship Recommendation Engine for PM Internship Scheme"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              background: "transparent"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DataFlow;
