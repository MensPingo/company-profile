import { Alert, Box, Button, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { services } from '../content/siteContent.js'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <PageSection eyebrow="Service" title="Service not found" subtitle="Please check the URL or explore our services.">
        <Alert severity="warning">This service page doesn’t exist yet.</Alert>
        <Box sx={{ mt: 2 }}>
          <Button component={RouterLink} to="/services" variant="contained">
            Back to Services
          </Button>
        </Box>
      </PageSection>
    )
  }

  return (
    <>
      <PageSection eyebrow="Service details" title={service.title} subtitle={service.intro}>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
          {service.techStack.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Stack>

        <Grid container spacing={2.5} sx={{ mt: 1 }}>
          <Grid item xs={12} md={7}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: 950 }}>Business problem</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {service.businessProblem}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography sx={{ fontWeight: 950 }}>Our solution</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {service.ourSolution}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography sx={{ fontWeight: 950 }}>Key features</Typography>
                <Stack spacing={1} sx={{ mt: 1 }}>
                  {service.features.map((f) => (
                    <Typography key={f} color="text.secondary">
                      • {f}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                background:
                  'linear-gradient(135deg, rgba(21,94,239,0.10) 0%, rgba(124,58,237,0.08) 55%, rgba(6,182,212,0.08) 100%)',
              }}
            >
              <CardContent>
                <Typography sx={{ fontWeight: 950 }}>Ready to discuss?</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  Share your requirements and we’ll propose the right plan, timeline, and stack.
                </Typography>
                <Stack spacing={1.25} sx={{ mt: 2 }}>
                  <Button
                    component={RouterLink}
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Request This Service
                  </Button>
                  <Button component={RouterLink} to="/portfolio" variant="outlined">
                    View Case Studies
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>
    </>
  )
}

