import { Box, Container, Typography } from '@mui/material'

export function PageSection({ eyebrow, title, subtitle, children, sx }) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, ...sx }}>
      <Container>
        {eyebrow ? (
          <Typography
            variant="overline"
            sx={{ letterSpacing: 1.4, color: 'text.secondary', fontWeight: 800 }}
          >
            {eyebrow}
          </Typography>
        ) : null}
        {title ? (
          <Typography variant="h3" sx={{ mt: eyebrow ? 1 : 0, fontWeight: 900 }}>
            {title}
          </Typography>
        ) : null}
        {subtitle ? (
          <Typography color="text.secondary" sx={{ mt: 1.25, maxWidth: 820 }}>
            {subtitle}
          </Typography>
        ) : null}
        {children ? <Box sx={{ mt: 4 }}>{children}</Box> : null}
      </Container>
    </Box>
  )
}

