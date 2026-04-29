import { Box, Button, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import SecurityIcon from '@mui/icons-material/Security'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ScheduleIcon from '@mui/icons-material/Schedule'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'

// Core values data remains unchanged
const coreValues = [
  {
    title: 'Client-first approach',
    desc: 'We understand business goals first and then build the right technical solution.',
  },
  {
    title: 'Transparency',
    desc: 'We keep communication clear with honest timelines, regular updates, and practical suggestions.',
  },
  {
    title: 'Security-first mindset',
    desc: 'We follow secure development practices for authentication, APIs, data handling, and deployments.',
  },
  {
    title: 'Quality delivery',
    desc: 'We focus on clean code, responsive UI, scalable architecture, and maintainable project structure.',
  },
]

// Trust elements remain unchanged
const trustElements = [
  { title: 'Quality', icon: <VerifiedUserIcon fontSize="small" /> },
  { title: 'Security', icon: <SecurityIcon fontSize="small" /> },
  { title: 'Transparency', icon: <VisibilityIcon fontSize="small" /> },
  { title: 'Timely delivery', icon: <ScheduleIcon fontSize="small" /> },
  { title: 'Scalable solutions', icon: <RocketLaunchIcon fontSize="small" /> },
]

// Team data remains unchanged
const team = [
  {
    name: 'Founder / Backend Lead',
    role: 'Java · Spring Boot · Microservices · System Design',
  },
  {
    name: 'Frontend Development',
    role: 'React · Material UI · Responsive UI · Landing Pages',
  },
  {
    name: 'Cloud & DevOps',
    role: 'AWS · Docker · GitHub · Deployment Support',
  },
  {
    name: 'AI & Automation',
    role: 'AI Chatbot · Workflow Automation · API Integration',
  },
]

// Reusable premium card style for consistent visual rhythm
const premiumCardSx = {
  height: '100%',
  borderRadius: 4,
  borderColor: 'rgba(148, 163, 184, 0.24)',
  background: 'rgba(255, 255, 255, 0.82)',
  backdropFilter: 'blur(14px)',
  boxShadow: '0 18px 48px rgba(15, 23, 42, 0.06)',
  transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: 'rgba(37, 99, 235, 0.32)',
    boxShadow: '0 26px 70px rgba(15, 23, 42, 0.12)',
  },
}

// Reusable text style for readable paragraphs
const paragraphSx = {
  mt: 1,
  color: 'text.secondary',
  lineHeight: 1.8,
  fontSize: { xs: '0.95rem', md: '1rem' },
}

// Reusable section title style
const cardTitleSx = {
  fontWeight: 950,
  letterSpacing: -0.25,
  color: 'text.primary',
}

export function AboutPage() {
  return (
    <Box
      sx={{
        // Page level visual polish with soft background
        overflowX: 'hidden',
        background:
          'radial-gradient(circle at 10% 5%, rgba(37, 99, 235, 0.08), transparent 30%), radial-gradient(circle at 90% 15%, rgba(124, 58, 237, 0.08), transparent 28%)',
      }}
    >
      <PageSection
        eyebrow="About Us"
        title="Building future-ready software with AI-powered thinking"
        subtitle="MensaPingo Tech is an Indian IT services startup focused on building modern websites, scalable backend systems, microservices, cloud-ready applications, and AI-powered digital solutions for startups and growing businesses."
      >
        <Card
          variant="outlined"
          sx={{
            overflow: 'hidden',
            borderRadius: { xs: 4, md: 6 },
            borderColor: 'rgba(37, 99, 235, 0.18)',
            position: 'relative',
            boxShadow: '0 28px 90px rgba(37, 99, 235, 0.12)',
            background:
              'linear-gradient(135deg, rgba(21,94,239,0.12) 0%, rgba(124,58,237,0.09) 55%, rgba(6,182,212,0.10) 100%)',
            // Decorative blur element for premium hero-card look
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 220,
              height: 220,
              right: -70,
              top: -80,
              borderRadius: '50%',
              background: 'rgba(37, 99, 235, 0.14)',
              filter: 'blur(8px)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', zIndex: 1 }}>
            <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
              <Grid item xs={12} md={8}>
                <Chip
                  label="Modern IT Services · AI · Cloud · Web"
                  size="small"
                  sx={{
                    mb: 2,
                    fontWeight: 800,
                    color: 'primary.main',
                    bgcolor: 'rgba(37, 99, 235, 0.09)',
                    border: '1px solid rgba(37, 99, 235, 0.16)',
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 950,
                    letterSpacing: -0.8,
                    fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.55rem' },
                    lineHeight: 1.12,
                  }}
                >
                  Company introduction
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1.5,
                    maxWidth: 820,
                    lineHeight: 1.85,
                    fontSize: { xs: '0.98rem', md: '1.06rem' },
                  }}
                >
                  MensaPingo Tech helps startups and growing businesses turn ideas into reliable digital products. We
                  design and develop business websites, backend systems, APIs, microservices, cloud-ready applications,
                  and AI-powered automation solutions with a focus on clean delivery, security, scalability, and
                  long-term maintainability.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={1.5}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      minHeight: 52,
                      borderRadius: 3,
                      fontWeight: 900,
                      textTransform: 'none',
                      boxShadow: '0 16px 34px rgba(37, 99, 235, 0.28)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 20px 44px rgba(37, 99, 235, 0.34)',
                      },
                    }}
                  >
                    Work With Us
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      minHeight: 52,
                      borderRadius: 3,
                      fontWeight: 900,
                      textTransform: 'none',
                      bgcolor: 'rgba(255,255,255,0.55)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'rgba(255,255,255,0.85)',
                      },
                    }}
                  >
                    Explore Services
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </PageSection>

      <PageSection
        eyebrow="Purpose"
        title="Mission, vision, and values"
        subtitle="A clear purpose and a practical engineering culture."
        sx={{
          background:
            'linear-gradient(180deg, rgba(248,250,252,0.7) 0%, rgba(239,246,255,0.55) 100%)',
        }}
      >
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={premiumCardSx}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography sx={cardTitleSx}>Mission</Typography>
                <Typography sx={paragraphSx}>
                  Our mission is to deliver affordable, secure, and scalable software solutions that help businesses grow
                  digitally with confidence.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={premiumCardSx}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography sx={cardTitleSx}>Vision</Typography>
                <Typography sx={paragraphSx}>
                  Our vision is to become a trusted technology partner for startups and small businesses by providing
                  future-ready software solutions powered by modern engineering and AI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={premiumCardSx}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography sx={cardTitleSx}>Core values</Typography>

                <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                  {coreValues.map((v) => (
                    <Box
                      key={v.title}
                      sx={{
                        pl: 1.5,
                        borderLeft: '3px solid',
                        borderColor: 'primary.main',
                      }}
                    >
                      <Typography sx={{ fontWeight: 900, fontSize: '0.95rem' }}>{v.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.35, lineHeight: 1.7 }}>
                        {v.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Story"
        title="Why we started, and what problems we solve"
        subtitle="We started MensaPingo Tech to make professional software development simple, affordable, and reliable for startups and growing businesses."
      >
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={premiumCardSx}>
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Typography sx={cardTitleSx}>Why we started</Typography>
                <Typography sx={paragraphSx}>
                  We started MensaPingo Tech with a simple goal: to make professional software development accessible
                  for startups, small businesses, and growing teams. Many businesses need websites, backend systems,
                  automation, and cloud-ready applications, but they struggle with high cost, unclear communication, and
                  poor technical quality. MensaPingo Tech was created to solve this gap with reliable, transparent, and
                  modern IT services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={premiumCardSx}>
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Typography sx={cardTitleSx}>What problems we solve</Typography>

                <Stack spacing={1.25} sx={{ mt: 1.5 }}>
                  {[
                    'Businesses need a professional online presence but do not know where to start.',
                    'Startups need scalable backend systems, APIs, and dashboards but want budget-friendly development.',
                    'Manual business processes waste time and can be improved with automation and AI tools.',
                    'Existing websites or applications often need better performance, security, and maintainability.',
                  ].map((p) => (
                    <Stack key={p} direction="row" spacing={1.25} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          mt: 1,
                          flexShrink: 0,
                        }}
                      />
                      <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {p}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="How we work"
        title="Our working methodology"
        subtitle="A clear and practical process designed for fast delivery, transparent communication, and long-term scalability."
        sx={{
          background:
            'linear-gradient(135deg, rgba(21,94,239,0.055) 0%, rgba(6,182,212,0.045) 100%)',
        }}
      >
        <Grid container spacing={2.5}>
          {[
            {
              title: 'Requirement discussion',
              desc: 'We understand your business idea, target users, required features, and expected outcome.',
            },
            {
              title: 'Planning & architecture',
              desc: 'We prepare the page flow, technology stack, database/API plan, and delivery roadmap.',
            },
            {
              title: 'Design & development',
              desc: 'We build clean UI, reusable components, secure APIs, and scalable backend structure.',
            },
            {
              title: 'Testing & deployment',
              desc: 'We test key flows, fix issues, deploy the project, and provide support for improvements.',
            },
          ].map((s, index) => (
            <Grid key={s.title} item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={premiumCardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2.5,
                      display: 'grid',
                      placeItems: 'center',
                      mb: 1.5,
                      fontWeight: 950,
                      color: 'primary.main',
                      bgcolor: 'rgba(37, 99, 235, 0.09)',
                      border: '1px solid rgba(37, 99, 235, 0.16)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>

                  <Typography sx={cardTitleSx}>{s.title}</Typography>
                  <Typography sx={paragraphSx}>{s.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Trust"
        title="Trust elements"
        subtitle="We focus on the foundations that make clients confident: quality, security, transparency, timely delivery, and scalable solutions."
      >
        <Grid container spacing={2.5}>
          {trustElements.map((t) => (
            <Grid key={t.title} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={premiumCardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Stack
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 2.5,
                        display: 'grid',
                        placeItems: 'center',
                        background:
                          'linear-gradient(135deg, rgba(37,99,235,0.13), rgba(6,182,212,0.11))',
                        color: 'primary.main',
                        border: '1px solid rgba(37, 99, 235, 0.14)',
                      }}
                    >
                      {t.icon}
                    </Stack>
                    <Typography sx={cardTitleSx}>{t.title}</Typography>
                  </Stack>

                  <Divider sx={{ my: 2.25, borderColor: 'rgba(148, 163, 184, 0.28)' }} />

                  <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    At MensaPingo Tech, we believe trust is built through clear communication, clean execution, secure
                    development, and honest delivery. Our goal is to create software that looks professional, works
                    reliably, and can scale as your business grows.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Team"
        title="Meet the team"
        subtitle="A focused technology team working with clean development practices, mentor review, and transparent delivery culture."
        sx={{
          background:
            'linear-gradient(180deg, rgba(248,250,252,0.75) 0%, rgba(255,255,255,0.95) 100%)',
        }}
      >
        <Grid container spacing={2.5}>
          {team.map((m) => (
            <Grid key={m.name} item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={premiumCardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 999,
                      background:
                        'linear-gradient(135deg, rgba(21,94,239,0.22) 0%, rgba(124,58,237,0.16) 55%, rgba(6,182,212,0.16) 100%)',
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      boxShadow: '0 16px 34px rgba(37, 99, 235, 0.13)',
                    }}
                  />

                  <Typography sx={{ ...cardTitleSx, mt: 2 }}>{m.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.7 }}>
                    {m.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Start Your Project"
        title="Ready to build your digital product?"
        subtitle="Share your idea with MensaPingo Tech. We will help you choose the right solution, technology stack, and development plan."
      >
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            textAlign: 'center',
            border: '1px solid rgba(37, 99, 235, 0.18)',
            background:
              'linear-gradient(135deg, rgba(37,99,235,0.10), rgba(124,58,237,0.08), rgba(6,182,212,0.08))',
            boxShadow: '0 28px 80px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              minHeight: 54,
              px: 4,
              borderRadius: 3,
              fontWeight: 950,
              textTransform: 'none',
              boxShadow: '0 18px 40px rgba(37, 99, 235, 0.28)',
              transition: 'all 0.25s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 24px 52px rgba(37, 99, 235, 0.36)',
              },
              '&:focus-visible': {
                outline: '3px solid rgba(37, 99, 235, 0.35)',
                outlineOffset: 4,
              },
            }}
          >
            Get Free Consultation
          </Button>
        </Box>
      </PageSection>
    </Box>
  )
}