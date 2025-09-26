import React from 'react';
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
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  Settings,
  People,
  Public,
  AutoAwesome,
  CheckCircle,
  TrendingUp,
} from '@mui/icons-material';
import styles from './style';

const plans = [
  {
    icon: <Settings sx={styles.planIcon} />,
    title: 'Building Platform',
    description:
      "Building a responsive portal with WhatsApp, IVR, and SMS access for all.",
    goals: [
      'Deploying Express.js backend and secure routes',
      'Maintaining a reliable MySQL database',
      'Enabling Twilio integration for communication',
      'Ensuring mobile-first user experience',
      'Expanding multilingual coverage',
    ],
    priority: 'High Priority',
    color: 'error',
  },
  {
    icon: <AutoAwesome sx={styles.planIcon} />,
    title: 'Powering AI Matching',
    description:
      "Implementing smart recommendation algorithms for finding relevant internships.",
    goals: [
      'Applying rule-based eligibility filtering',
      'Running TF-IDF and Cosine Similarity scoring',
      'Ranking internships for best matches',
      'Supporting neural machine translation',
      'Training models for improved accuracy',
    ],
    priority: 'High Priority',
    color: 'error',
  },
  {
    icon: <People sx={styles.planIcon} />,
    title: 'Onboarding Students',
    description:
      "Onboarding students through digital and voice channels for PM Internship Scheme.",
    goals: [
      'Enabling profile submissions via WhatsApp/IVR/SMS',
      'Onboarding 50,000+ students in pilot phase',
      'Facilitating access for rural and tribal youth',
      'Providing real-time eligibility feedback',
      'Increasing awareness via campus webinars',
    ],
    priority: 'Medium Priority',
    color: 'warning',
  },
  {
    icon: <Public sx={styles.planIcon} />,
    title: 'Promoting Inclusion',
    description:
      "Promoting government opportunities and fostering equal participation.",
    goals: [
      'Sharing portal with partner universities',
      'Integrating feedback from communities',
      'Promoting inclusivity and language accessibility',
      'Tracking success and engagement metrics',
      'Collaborating with government mentors',
    ],
    priority: 'Medium Priority',
    color: 'warning',
  },
];

const progressData = [
  { name: 'Platform Deployment Progress', progress: 90 },
  { name: 'AI Module Completion', progress: 75 },
  { name: 'Student Onboarding', progress: 60 },
  { name: 'Outreach Initiatives', progress: 50 },
];

const Plans = () => (
  <Box sx={styles.section} id="features">
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.sectionTitle}>
        Next for InterNova
      </Typography>
      <Typography variant="h6" sx={styles.sectionSubtitle}>
        Advancing tech, AI features, and student outreach for PM Internship Scheme!
      </Typography>
      <Grid container spacing={4} sx={{ ...styles.plans, mb: 6 }}>
        {plans.map((plan, idx) => (
          <Grid item xs={12} md={6} lg={4} key={idx}>
            <Card sx={styles.planCard}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                {plan.icon}
                <Typography variant="h5" sx={styles.planTitle}>
                  {plan.title}
                </Typography>
                <Typography sx={styles.planDescription}>
                  {plan.description}
                </Typography>
                <Chip
                  label={plan.priority}
                  color={plan.color}
                  size="small"
                  sx={styles.priorityChip}
                />
                <List sx={styles.goalsList}>
                  {plan.goals.map((goal, goalIdx) => (
                    <ListItem key={goalIdx} sx={styles.goalItem}>
                      <ListItemIcon sx={styles.goalIcon}>
                        <CheckCircle fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={goal}
                        primaryTypographyProps={{ sx: styles.goalText }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={styles.progressSection}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <TrendingUp sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
          <Typography sx={styles.progressTitle}>
            Platform & Outreach Progress
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {progressData.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Box sx={styles.progressItem}>
                <Box sx={styles.progressLabel}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#1565c0', fontWeight: 'bold' }}
                  >
                    {item.progress}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={item.progress}
                  sx={styles.progressBar}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);

export default Plans;
