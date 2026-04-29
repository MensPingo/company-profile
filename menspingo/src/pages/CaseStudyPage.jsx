import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { caseStudies } from '../content/siteContent.js'

const mainCardSx = {
  borderRadius: { xs: 4, md: 5 },
  border: '1.5px solid rgba(37, 99, 235, 0.22)',
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
  boxShadow: '0 16px 44px rgba(15, 23, 42, 0.08)',
}

const paragraphSx = {
  mt: 1,
  color: '#475569',
  lineHeight: 1.85,
  fontSize: { xs: '0.96rem', md: '1.02rem' },
}

export function CaseStudyPage() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    return (
      <Box
        sx={{
          minHeight: '70vh',
          background:
            'linear-gradient(180deg, #f8fbff 0%, #ffffff 48%, #f1f7ff 100%)',
        }}
      >
        <PageSection
          eyebrow="Case study"
          title="Case study not found"
          subtitle="Please check the URL or explore our portfolio."
        >
          <Card
            variant="outlined"
            sx={{
              borderRadius: 4,
              border: '1.5px solid rgba(245, 158, 11, 0.35)',
              background: 'linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)',
              boxShadow: '0 14px 36px rgba(15, 23, 42, 0.08)',
            }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Alert severity="warning" sx={{ borderRadius: 3 }}>
                This case study page doesn’t exist yet.
              </Alert>

              <Box sx={{ mt: 2.5 }}>
                <Button
                  component={RouterLink}
                  to="/portfolio"
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    minHeight: 46,
                    borderRadius: 3,
                    fontWeight: 900,
                    textTransform: 'none',
                    boxShadow: '0 14px 30px rgba(37, 99, 235, 0.25)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 18px 42px rgba(37, 99, 235, 0.32)',
                    },
                  }}
                >
                  Back to Portfolio
                </Button>
              </Box>
            </CardContent>
          </Card>
        </PageSection>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        background:
          'radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 92% 12%, rgba(124, 58, 237, 0.08), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)',
      }}
    >
      <PageSection eyebrow={`Case study · ${cs.category}`} title={cs.title} subtitle={cs.result}>
        <Stack spacing={{ xs: 2.5, md: 3 }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Chip
              label={cs.category}
              sx={{
                fontWeight: 900,
                color: '#1d4ed8',
                bgcolor: '#dbeafe',
                border: '1px solid rgba(37, 99, 235, 0.32)',
              }}
            />

            {cs.stack.map((t) => (
              <Chip
                key={t}
                label={t}
                sx={{
                  borderRadius: 999,
                  fontWeight: 800,
                  bgcolor: '#eef6ff',
                  color: '#1d4ed8',
                  border: '1px solid rgba(37, 99, 235, 0.28)',
                  transition: 'all 0.22s ease',
                  '&:hover': {
                    bgcolor: '#dbeafe',
                    borderColor: '#2563eb',
                  },
                }}
              />
            ))}
          </Stack>

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            <Grid item xs={12} md={8}>
              <Card
                variant="outlined"
                sx={{
                  ...mainCardSx,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'caseStudyIn 0.55s ease both',

                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '0 0 auto 0',
                    height: 7,
                    background:
                      'linear-gradient(90deg, #1d4ed8 0%, #2563eb 45%, #06b6d4 100%)',
                  },

                  '@keyframes caseStudyIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(18px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4 } }}>
                  <CaseSection number="01" title="Problem" text={cs.problem} />

                  <Divider sx={{ my: { xs: 2.75, md: 3.25 }, borderColor: 'rgba(148, 163, 184, 0.35)' }} />

                  <CaseSection number="02" title="Solution" text={cs.solution} />

                  <Divider sx={{ my: { xs: 2.75, md: 3.25 }, borderColor: 'rgba(148, 163, 184, 0.35)' }} />

                  <CaseSection number="03" title="Result" text={cs.result} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  position: { md: 'sticky' },
                  top: { md: 96 },
                  overflow: 'hidden',
                  borderRadius: { xs: 4, md: 5 },
                  border: '1.5px solid rgba(37, 99, 235, 0.26)',
                  background:
                    'linear-gradient(135deg, rgba(21,94,239,0.12) 0%, rgba(124,58,237,0.09) 55%, rgba(6,182,212,0.10) 100%)',
                  boxShadow:
                    '0 22px 70px rgba(37, 99, 235, 0.13), inset 0 1px 0 rgba(255,255,255,0.85)',
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Chip
                    label="Project Roadmap"
                    sx={{
                      mb: 1.75,
                      fontWeight: 900,
                      color: '#1d4ed8',
                      bgcolor: '#dbeafe',
                      border: '1px solid rgba(37, 99, 235, 0.28)',
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 950,
                      letterSpacing: -0.45,
                      lineHeight: 1.2,
                      color: '#0f172a',
                      fontSize: { xs: '1.35rem', md: '1.55rem' },
                    }}
                  >
                    Want a similar project?
                  </Typography>

                  <Typography sx={paragraphSx}>
                    Tell us your scope and we’ll suggest the right stack, timeline, and roadmap.
                  </Typography>

                  <Divider sx={{ my: 2.5, borderColor: 'rgba(37, 99, 235, 0.18)' }} />

                  <Stack spacing={1.25}>
                    {['Scope discussion', 'Stack selection', 'Timeline planning', 'Development roadmap'].map(
                      (item, index) => (
                        <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                          <Box
                            sx={{
                              width: 28,
                              height: 28,
                              borderRadius: 2,
                              display: 'grid',
                              placeItems: 'center',
                              bgcolor: '#ffffff',
                              color: '#2563eb',
                              fontWeight: 950,
                              fontSize: '0.78rem',
                              border: '1px solid rgba(37, 99, 235, 0.2)',
                            }}
                          >
                            {index + 1}
                          </Box>
                          <Typography sx={{ color: '#475569', fontWeight: 750 }}>{item}</Typography>
                        </Stack>
                      ),
                    )}
                  </Stack>

                  <Stack spacing={1.25} sx={{ mt: 3 }}>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        minHeight: 50,
                        borderRadius: 3,
                        fontWeight: 950,
                        textTransform: 'none',
                        boxShadow: '0 18px 40px rgba(37, 99, 235, 0.28)',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 24px 52px rgba(37, 99, 235, 0.36)',
                        },
                      }}
                    >
                      Get Free Consultation
                    </Button>

                    <Button
                      component={RouterLink}
                      to="/services"
                      variant="outlined"
                      sx={{
                        minHeight: 50,
                        borderRadius: 3,
                        fontWeight: 950,
                        textTransform: 'none',
                        bgcolor: '#ffffff',
                        borderColor: 'rgba(37, 99, 235, 0.28)',
                        '&:hover': {
                          bgcolor: '#eef6ff',
                          borderColor: '#2563eb',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Explore Services
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </PageSection>
    </Box>
  )
}

function CaseSection({ number, title, text }) {
  return (
    <Stack spacing={1.25}>
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: 2.5,
            display: 'grid',
            placeItems: 'center',
            bgcolor: '#dbeafe',
            color: '#1d4ed8',
            border: '1px solid rgba(37, 99, 235, 0.24)',
            fontWeight: 950,
          }}
        >
          {number}
        </Box>

        <Typography
          sx={{
            fontWeight: 950,
            letterSpacing: -0.35,
            color: '#0f172a',
            fontSize: { xs: '1.2rem', md: '1.4rem' },
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Typography sx={paragraphSx}>{text}</Typography>
    </Stack>
  )
}