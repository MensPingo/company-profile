import { Button, Card, CardActions, CardContent, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { services } from '../content/siteContent.js'

export function ServicesPage() {
  return (
    <PageSection
      eyebrow="Services"
      title="Detailed services for modern businesses"
      subtitle="Each service includes the business problem, our solution, key features, tech stack, and a quick CTA to request it."
    >
      <Grid container spacing={2.5}>
        {services.map((s) => (
          <Grid key={s.slug} item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2.5} alignItems="flex-start">
                  <Grid item xs={12} md={8}>
                    <Typography variant="h5" sx={{ fontWeight: 950, letterSpacing: -0.4 }}>
                      {s.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {s.intro}
                    </Typography>

                    <Divider sx={{ my: 2.5 }} />

                    <Typography sx={{ fontWeight: 950 }}>Business problem</Typography>
                    <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                      {s.businessProblem}
                    </Typography>

                    <Typography sx={{ fontWeight: 950, mt: 2.5 }}>Our solution</Typography>
                    <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                      {s.ourSolution}
                    </Typography>

                    <Typography sx={{ fontWeight: 950, mt: 2.5 }}>Key features</Typography>
                    <Grid container spacing={1} sx={{ mt: 0.75 }}>
                      {s.features.map((f) => (
                        <Grid key={f} item xs={12} sm={6}>
                          <Typography color="text.secondary">• {f}</Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card
                      variant="outlined"
                      sx={{
                        height: '100%',
                        background:
                          'linear-gradient(135deg, rgba(21,94,239,0.08) 0%, rgba(124,58,237,0.06) 55%, rgba(6,182,212,0.06) 100%)',
                      }}
                    >
                      <CardContent>
                        <Typography sx={{ fontWeight: 950 }}>Tech stack used</Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
                          {s.techStack.map((t) => (
                            <Chip key={t} label={t} size="small" />
                          ))}
                        </Stack>

                        <Divider sx={{ my: 2.5 }} />

                        <Stack spacing={1.25}>
                          <Button
                            component={RouterLink}
                            to={`/contact?service=${encodeURIComponent(s.title)}`}
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                          >
                            Request This Service
                          </Button>
                          <Button component={RouterLink} to={`/services/${s.slug}`} variant="outlined">
                            View service details
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button component={RouterLink} to={`/services/${s.slug}`} size="small" endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageSection>
  )
}

