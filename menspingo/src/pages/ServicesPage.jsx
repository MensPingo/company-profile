import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { services } from '../content/siteContent.js'

export function ServicesPage() {
  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      <PageSection
        eyebrow="Services"
        title="Detailed services for modern businesses"
        subtitle="Each service includes the business problem, our solution, key features, tech stack, and a quick CTA to request it."
      >
        <Stack divider={<Divider sx={{ borderColor: 'rgba(15, 23, 42, 0.08)' }} />} spacing={0}>
          {services.map((s) => (
            <Box
              key={s.slug}
              sx={{
                py: { xs: 4, md: 5 },
              }}
            >
              <Grid container spacing={{ xs: 2.5, md: 4 }}>
                <Grid item xs={12} md={8}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.2rem', md: '1.45rem' },
                      lineHeight: 1.35,
                      color: '#0f172a',
                    }}
                  >
                    {s.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: '#475569',
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      lineHeight: 1.8,
                    }}
                  >
                    {s.intro}
                  </Typography>

                  <Box sx={{ mt: 2.5 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.98rem', md: '1.02rem' },
                        color: '#0f172a',
                      }}
                    >
                      Business problem
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.75,
                        color: '#475569',
                        fontSize: { xs: '0.94rem', md: '0.98rem' },
                        lineHeight: 1.8,
                      }}
                    >
                      {s.businessProblem}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2.5 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.98rem', md: '1.02rem' },
                        color: '#0f172a',
                      }}
                    >
                      Our solution
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.75,
                        color: '#475569',
                        fontSize: { xs: '0.94rem', md: '0.98rem' },
                        lineHeight: 1.8,
                      }}
                    >
                      {s.ourSolution}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2.5 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.98rem', md: '1.02rem' },
                        color: '#0f172a',
                      }}
                    >
                      Key features
                    </Typography>

                    <Grid container spacing={1} sx={{ mt: 0.75 }}>
                      {s.features.map((f) => (
                        <Grid key={f} item xs={12} sm={6}>
                          <Typography
                            sx={{
                              color: '#475569',
                              fontSize: { xs: '0.93rem', md: '0.97rem' },
                              lineHeight: 1.75,
                            }}
                          >
                            • {f}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box sx={{ mt: 2.5 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.98rem', md: '1.02rem' },
                        color: '#0f172a',
                      }}
                    >
                      Tech stack used
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.75,
                        color: '#475569',
                        fontSize: { xs: '0.94rem', md: '0.98rem' },
                        lineHeight: 1.8,
                      }}
                    >
                      {s.techStack.join(', ')}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Stack
                    spacing={1.25}
                    sx={{
                      pt: { xs: 0.5, md: 1 },
                      alignItems: { xs: 'flex-start', md: 'flex-start' },
                    }}
                  >
                    <Button
                      component={RouterLink}
                      to={`/contact?service=${encodeURIComponent(s.title)}`}
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        textTransform: 'none',
                        fontWeight: 700,
                        borderRadius: 2.5,
                        px: 2.25,
                      }}
                    >
                      Request This Service
                    </Button>

                    <Button
                      component={RouterLink}
                      to={`/services/${s.slug}`}
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        textTransform: 'none',
                        fontWeight: 700,
                        px: 0,
                        minWidth: 'auto',
                      }}
                    >
                      View service details
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Stack>
      </PageSection>
    </Box>
  )
}