import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import SchoolIcon from '@mui/icons-material/School'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { PageSection } from '../components/common/PageSection.jsx'
import { industries } from '../content/siteContent.js'

const iconBySlug = {
  ecommerce: <LocalMallIcon fontSize="small" />,
  healthcare: <LocalHospitalIcon fontSize="small" />,
  education: <SchoolIcon fontSize="small" />,
  finance: <AccountBalanceIcon fontSize="small" />,
  logistics: <LocalShippingIcon fontSize="small" />,
  manufacturing: <PrecisionManufacturingIcon fontSize="small" />,
  startups: <RocketLaunchIcon fontSize="small" />,
  'local-businesses': <StorefrontIcon fontSize="small" />,
}

const cardSx = {
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 4,
  border: '1.5px solid rgba(37, 99, 235, 0.22)',
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
  boxShadow: '0 12px 34px rgba(15, 23, 42, 0.08)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',

  // Gradient top line makes card boundary strong and premium
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '0 0 auto 0',
    height: 6,
    background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 45%, #06b6d4 100%)',
  },

  '&:hover': {
    transform: 'translateY(-7px)',
    borderColor: '#2563eb',
    boxShadow:
      '0 24px 64px rgba(37, 99, 235, 0.17), 0 8px 22px rgba(15, 23, 42, 0.08)',
  },

  '&:hover .industry-icon': {
    transform: 'scale(1.08) rotate(-3deg)',
    boxShadow: '0 16px 34px rgba(37, 99, 235, 0.18)',
  },
}

export function IndustriesPage() {
  return (
    <Box
      sx={{
        overflowX: 'hidden',
        background:
          'radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 92% 14%, rgba(6, 182, 212, 0.08), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)',
      }}
    >
      <PageSection
        eyebrow="Industries"
        title="Industries we serve"
        subtitle="Each industry card includes a short description and examples of solutions we can provide."
      >
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {industries.map((i, index) => (
            <Grid key={i.slug} item xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  ...cardSx,
                  animation: 'industryCardIn 0.5s ease both',
                  animationDelay: `${index * 75}ms`,

                  '@keyframes industryCardIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(16px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Stack
                      className="industry-icon"
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2.75,
                        display: 'grid',
                        placeItems: 'center',
                        background:
                          'linear-gradient(135deg, rgba(37,99,235,0.14), rgba(6,182,212,0.12))',
                        color: '#1d4ed8',
                        border: '1px solid rgba(37, 99, 235, 0.22)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {iconBySlug[i.slug] ?? <BusinessIcon fontSize="small" />}
                    </Stack>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 950,
                          letterSpacing: -0.35,
                          lineHeight: 1.25,
                          color: '#0f172a',
                        }}
                      >
                        {i.title}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 0.25,
                          color: '#64748b',
                          fontWeight: 800,
                          letterSpacing: 0.25,
                        }}
                      >
                        Digital solutions
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography
                    sx={{
                      mt: 1.75,
                      color: '#475569',
                      lineHeight: 1.78,
                      fontSize: '0.96rem',
                    }}
                  >
                    {i.summary}
                  </Typography>

                  <Divider sx={{ my: 2.25, borderColor: 'rgba(148, 163, 184, 0.35)' }} />

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 950,
                      color: '#0f172a',
                      letterSpacing: -0.15,
                    }}
                  >
                    Possible solutions
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mt: 1.25,
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {(i.solutions ?? []).map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        sx={{
                          borderRadius: 999,
                          fontWeight: 800,
                          bgcolor: '#eef6ff',
                          color: '#1d4ed8',
                          border: '1px solid rgba(37, 99, 235, 0.28)',
                          transition: 'all 0.22s ease',
                          '&:hover': {
                            bgcolor: '#dbeafe',
                            color: '#1e40af',
                            borderColor: '#2563eb',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </Box>
  )
}