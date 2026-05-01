import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { blogPosts } from '../content/siteContent.js'

export function BlogPage() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
      }}
    >
      <PageSection
        eyebrow="Blog / Insights"
        title="Insights on AI, engineering, and delivery"
        subtitle="Practical learnings from building modern products for startups and growing businesses."
      >
        <Stack divider={<Divider sx={{ borderColor: 'rgba(15, 23, 42, 0.08)' }} />} spacing={0}>
          {blogPosts.map((p) => (
            <Box
              key={p.slug}
              sx={{
                py: { xs: 3, md: 4 },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  color: '#64748b',
                  mb: 1,
                }}
              >
                {new Date(p.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </Typography>

              <Typography
                component={RouterLink}
                to={`/blog/${p.slug}`}
                sx={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: '#0f172a',
                  fontWeight: 800,
                  fontSize: { xs: '1.02rem', md: '1.6rem' },
                  lineHeight: 1.5,
                  letterSpacing: -0.4,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#2563eb',
                  },
                }}
              >
                {p.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1.25,
                  maxWidth: '820px',
                  color: '#475569',
                  fontSize: { xs: '0.96rem', md: '1rem' },
                  lineHeight: 1.8,
                }}
              >
                {p.summary}
              </Typography>

              <Button
                component={RouterLink}
                to={`/blog/${p.slug}`}
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  mt: 1.5,
                  px: 0,
                  minWidth: 'auto',
                  textTransform: 'none',
                  fontWeight: 800,
                  color: '#2563eb',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#1d4ed8',
                  },
                }}
              >
                Read more
              </Button>
            </Box>
          ))}
        </Stack>
      </PageSection>
    </Box>
  )
}