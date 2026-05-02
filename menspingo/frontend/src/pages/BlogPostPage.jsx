import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ArticleIcon from '@mui/icons-material/Article'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { blogPosts } from '../content/siteContent.js'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <Box
        sx={{
          minHeight: '70vh',
          background:
            'linear-gradient(180deg, #f8fbff 0%, #ffffff 48%, #f1f7ff 100%)',
        }}
      >
        <PageSection eyebrow="Blog" title="Post not found" subtitle="Please check the URL or view all posts.">
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
                This blog post doesn’t exist yet.
              </Alert>

              <Box sx={{ mt: 2.5 }}>
                <Button
                  component={RouterLink}
                  to="/blog"
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
                  Back to Blog
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
          'radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 92% 12%, rgba(124, 58, 237, 0.08), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 46%, #f1f7ff 100%)',
      }}
    >
      <PageSection
        eyebrow="Blog / Insights"
        title={post.title}
        subtitle={new Date(post.date).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        })}
      >
        <Stack spacing={{ xs: 2.5, md: 3 }}>
          <Card
            variant="outlined"
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: 4, md: 5 },
              border: '1.5px solid rgba(37, 99, 235, 0.24)',
              background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
              boxShadow:
                '0 14px 38px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
              animation: 'postCardIn 0.55s ease both',

              // Strong top line keeps blog detail page visually connected with blog cards
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: '0 0 auto 0',
                height: 7,
                background:
                  'linear-gradient(90deg, #1d4ed8 0%, #2563eb 45%, #06b6d4 100%)',
              },

              '@keyframes postCardIn': {
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
            <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4.5 } }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.25}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                justifyContent="space-between"
                sx={{ mb: 2.5 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <CalendarMonthIcon sx={{ fontSize: 19, color: '#2563eb' }} />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 850,
                      letterSpacing: 0.3,
                      color: '#64748b',
                    }}
                  >
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })}
                  </Typography>
                </Stack>

                <Chip
                  icon={<AutoAwesomeIcon />}
                  label="MensaPingo Insight"
                  size="small"
                  sx={{
                    height: 30,
                    fontWeight: 850,
                    color: '#1d4ed8',
                    bgcolor: '#dbeafe',
                    border: '1px solid rgba(37, 99, 235, 0.35)',
                    '& .MuiChip-icon': {
                      fontSize: 17,
                      color: '#1d4ed8',
                    },
                  }}
                />
              </Stack>

              <Box
                sx={{
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 4,
                  border: '1px solid rgba(37, 99, 235, 0.18)',
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.07), rgba(6,182,212,0.06))',
                }}
              >
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <ArticleIcon sx={{ color: '#2563eb' }} />
                  <Typography
                    sx={{
                      fontWeight: 950,
                      letterSpacing: -0.2,
                      color: '#0f172a',
                    }}
                  >
                    Summary
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    mt: 1.25,
                    color: '#475569',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.98rem', md: '1.04rem' },
                  }}
                >
                  {post.summary}
                </Typography>
              </Box>

              <Divider sx={{ my: { xs: 3, md: 3.5 }, borderColor: 'rgba(148, 163, 184, 0.35)' }} />

              <Typography
                sx={{
                  fontWeight: 950,
                  letterSpacing: -0.25,
                  fontSize: { xs: '1.25rem', md: '1.45rem' },
                  color: '#0f172a',
                }}
              >
                Article
              </Typography>

              {post.content?.length ? (
                <Stack spacing={2} sx={{ mt: 1.75 }}>
                  {post.content.map((paragraph, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: '#475569',
                        lineHeight: 1.9,
                        fontSize: { xs: '0.98rem', md: '1.04rem' },
                        letterSpacing: 0.05,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              ) : (
                <Box
                  sx={{
                    mt: 2,
                    p: { xs: 2, md: 2.5 },
                    borderRadius: 4,
                    border: '1px dashed rgba(37, 99, 235, 0.35)',
                    bgcolor: '#f8fbff',
                  }}
                >
                  <Typography sx={{ color: '#475569', lineHeight: 1.8 }}>
                    This article is being updated with more practical details.
                  </Typography>
                  <Typography sx={{ mt: 1, color: '#475569', lineHeight: 1.8 }}>
                    Please check back soon for complete insights from MensaPingo Tech.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          <Box>
            <Button
              component={RouterLink}
              to="/blog"
              startIcon={<ArrowBackIcon />}
              sx={{
                minHeight: 46,
                px: 2.25,
                borderRadius: 3,
                fontWeight: 900,
                textTransform: 'none',
                color: '#2563eb',
                border: '1px solid rgba(37, 99, 235, 0.22)',
                bgcolor: '#ffffff',
                boxShadow: '0 10px 26px rgba(15, 23, 42, 0.06)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: '#eef6ff',
                  borderColor: '#2563eb',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 16px 36px rgba(37, 99, 235, 0.16)',
                },
                '&:focus-visible': {
                  outline: '3px solid rgba(37, 99, 235, 0.28)',
                  outlineOffset: 4,
                },
              }}
            >
              Back to Blog
            </Button>
          </Box>
        </Stack>
      </PageSection>
    </Box>
  )
}