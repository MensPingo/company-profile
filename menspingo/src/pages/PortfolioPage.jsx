import { Button, Card, CardActions, CardContent, Chip, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { caseStudies } from '../content/siteContent.js'

const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Dashboard', 'Automation']

export function PortfolioPage() {
  const [category, setCategory] = useState('All')

  const items = useMemo(() => {
    if (category === 'All') return caseStudies
    return caseStudies.filter((c) => c.category === category)
  }, [category])

  return (
    <PageSection
      eyebrow="Portfolio"
      title="Portfolio / Case studies"
      subtitle="Filter by category and explore detailed case studies with problem, solution, stack, and results."
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.25} alignItems={{ md: 'center' }} sx={{ mb: 2.5 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <FilterAltIcon fontSize="small" />
          <Typography sx={{ fontWeight: 900 }}>Filter</Typography>
        </Stack>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={(_, v) => {
            if (v) setCategory(v)
          }}
          size="small"
          sx={{ flexWrap: 'wrap' }}
        >
          {categories.map((c) => (
            <ToggleButton key={c} value={c} sx={{ px: 1.5 }}>
              {c}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      <Grid container spacing={2.5}>
        {items.map((p) => (
          <Grid key={p.slug} item xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent sx={{ pb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Category: <strong>{p.category}</strong>
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                  {p.stack.map((t) => (
                    <Chip key={t} label={t} size="small" />
                  ))}
                </Stack>
                <Typography sx={{ fontWeight: 900, mt: 1.75 }}>Problem</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {p.problem}
                </Typography>
                <Typography sx={{ fontWeight: 900, mt: 1.5 }}>Solution</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {p.solution}
                </Typography>
                <Typography sx={{ fontWeight: 900, mt: 1.5 }}>Result</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {p.result}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  component={RouterLink}
                  to={`/portfolio/${p.slug}`}
                  size="small"
                  endIcon={<ArrowOutwardIcon />}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageSection>
  )
}

