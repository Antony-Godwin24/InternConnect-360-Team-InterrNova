import React from 'react';
import {
  Box, Typography, Container, Grid, Card, CardContent, Avatar, Chip
} from '@mui/material';
import styles from './style';
import Antony from '../../../assets/Antony.jpg';

const teamMembers = [
  { name: 'HARIPRIYA A', role: 'Team Lead', photo: {Antony} },
  { name: 'ANTONY GODWIN S', role: 'Mern Full Stack Developer', photo: {Antony}},
  { name: 'ATCHAYA K', role: 'Designer', photo: {Antony} },
  { name: 'AADHIKESAV A', role: 'Front End Developer',photo: {Antony} },
  { name: 'KRISHKANTH K', role: 'Python Developer', photo: {Antony} },
  { name: 'BALAGANESH K', role: 'Designer', photo: {Antony} }
];

const firstRow = teamMembers.slice(0, 4);
const secondRow = teamMembers.slice(4, 6);

const Party = () => (
  <Box sx={styles.section} id='team'>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.sectionTitle}>
        Meet the InterNova Team
      </Typography>
      <Typography variant="h6" sx={styles.sectionSubtitle}>
        K. Ramakrishnan College of Engineering | B.E. CSE
      </Typography>

      {/* First row (3 members) */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {firstRow.map((member, idx) => (
          <Grid item xs={12} sm={4} md={4} key={idx}>
            <Card sx={styles.leaderCard}>
              <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={styles.leaderName}>{member.name}</Typography>
                <Avatar sx={styles.leaderAvatar} src={member.photo} alt={member.name} />
                <Typography sx={styles.leaderPosition}>{member.role}</Typography>
                <Chip label="B.E CSE" size="small" color="primary" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Second row (3 members) */}
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
        {secondRow.map((member, idx) => (
          <Grid item xs={12} sm={4} md={4} key={idx}>
            <Card sx={styles.leaderCard}>
              <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={styles.leaderName}>{member.name}</Typography>
                <Avatar sx={styles.leaderAvatar} src={member.photo} alt={member.name} />
                <Typography sx={styles.leaderPosition}>{member.role}</Typography>
                <Chip label="B.E CSE" size="small" color="primary" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Party;
