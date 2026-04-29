import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { blogPosts } from '../content/siteContent.js'

export function BlogPage() {
  return (
    <Box
      sx={{
        overflowX: 'hidden',
        background:
          'linear-gradient(180deg, #f8fbff 0%, #ffffff 48%, #f1f7ff 100%)',
      }}
    >
      <PageSection
        eyebrow="Blog / Insights"
        title="Insights on AI, engineering, and delivery"
        subtitle="Practical learnings from building modern products for startups and growing businesses."
      >
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {blogPosts.map((p, index) => (
            <Grid key={p.slug} item xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,

                  // Strong visible border so card lines do not look dull
                  border: '1.5px solid rgba(37, 99, 235, 0.24)',

                  // Solid clean background gives better professional contrast
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',

                  // Premium depth without making UI heavy
                  boxShadow:
                    '0 10px 30px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)',

                  transition:
                    'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',

                  // Small entrance animation for page polish
                  animation: 'blogCardIn 0.5s ease both',
                  animationDelay: `${index * 80}ms`,

                  // Top gradient line makes every card more premium and visible
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '0 0 auto 0',
                    height: 6,
                    background:
                      'linear-gradient(90deg, #1d4ed8 0%, #2563eb 45%, #06b6d4 100%)',
                  },

                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: '#2563eb',
                    boxShadow:
                      '0 22px 60px rgba(37, 99, 235, 0.18), 0 8px 22px rgba(15, 23, 42, 0.08)',
                  },

                  '&:hover .blog-arrow': {
                    transform: 'translate(3px, -3px)',
                  },

                  '@keyframes blogCardIn': {
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
                <CardContent sx={{ p: { xs: 2.5, md: 3 }, pb: 1.5 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 1.75 }}
                  >
                    <Stack direction="row" spacing={0.75} alignItems="center">
                      <CalendarMonthIcon sx={{ fontSize: 17, color: '#2563eb' }} />
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 850,
                          letterSpacing: 0.3,
                          color: '#64748b',
                        }}
                      >
                        {new Date(p.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                        })}
                      </Typography>
                    </Stack>

                    {index === 0 && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label="Featured"
                        size="small"
                        sx={{
                          height: 26,
                          fontWeight: 850,
                          color: '#1d4ed8',
                          bgcolor: '#dbeafe',
                          border: '1px solid rgba(37, 99, 235, 0.35)',
                          '& .MuiChip-icon': {
                            fontSize: 16,
                            color: '#1d4ed8',
                          },
                        }}
                      />
                    )}
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 950,
                      letterSpacing: -0.35,
                      lineHeight: 1.25,
                      fontSize: { xs: '1.1rem', md: '1.18rem' },
                      color: '#0f172a',
                    }}
                  >
                    {p.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.15,
                      lineHeight: 1.75,
                      fontSize: '0.95rem',
                      color: '#475569',
                    }}
                  >
                    {p.summary}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mt: 2,
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {p.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
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
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions
                  sx={{
                    px: { xs: 2.5, md: 3 },
                    pb: { xs: 2.5, md: 3 },
                    pt: 0.5,
                  }}
                >
                  <Button
                    component={RouterLink}
                    to={`/blog/${p.slug}`}
                    size="medium"
                    endIcon={<ArrowOutwardIcon className="blog-arrow" />}
                    sx={{
                      px: 0,
                      fontWeight: 900,
                      textTransform: 'none',
                      color: '#2563eb',
                      transition: 'all 0.25s ease',
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.25s ease',
                      },
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#1d4ed8',
                        letterSpacing: 0.2,
                      },
                      '&:focus-visible': {
                        outline: '3px solid rgba(37, 99, 235, 0.28)',
                        outlineOffset: 4,
                        borderRadius: 2,
                      },
                    }}
                  >
                    Read more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </Box>
  )
}