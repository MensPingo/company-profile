import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        // Premium IT-company footer background with soft gradient
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 5, md: 7 },
        mt: 6,
        background:
          'linear-gradient(180deg, rgba(248,250,252,0.96) 0%, rgba(239,246,255,0.82) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'flex-start' }}
        >
          {/* Brand/About section */}
          <Box sx={{ maxWidth: 420 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                component="img"
                src="/logo-mark.png"
                alt="Menspingo logo"
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2.5,
                  objectFit: 'contain',
                  boxShadow: '0 10px 28px rgba(37, 99, 235, 0.16)',
                }}
              />
              <Typography
                sx={{
                  fontWeight: 950,
                  letterSpacing: -0.5,
                  fontSize: '1.15rem',
                  color: 'text.primary',
                }}
              >
                Menspingo
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1.5,
                lineHeight: 1.75,
                maxWidth: 390,
              }}
            >
              AI-powered IT solutions company for startups and growing businesses. We design, develop, and scale
              intelligent software solutions for the future.
            </Typography>

            {/* Social icons with polished hover/focus states */}
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                aria-label="LinkedIn"
                size="small"
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    boxShadow: '0 12px 24px rgba(37, 99, 235, 0.22)',
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="GitHub"
                size="small"
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    bgcolor: 'grey.900',
                    color: '#fff',
                    boxShadow: '0 12px 24px rgba(15, 23, 42, 0.2)',
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="YouTube"
                size="small"
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    bgcolor: 'error.main',
                    color: 'error.contrastText',
                    boxShadow: '0 12px 24px rgba(220, 38, 38, 0.2)',
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 3.5, sm: 5 }}
            sx={{
              flexWrap: 'wrap',
              width: { xs: '100%', md: 'auto' },
            }}
          >
            {/* Quick links */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 900,
                  mb: 1.25,
                  fontSize: '0.95rem',
                  color: 'text.primary',
                }}
              >
                Quick links
              </Typography>

              <Stack spacing={0.9}>
                {[
                  ['Home', '/'],
                  ['About', '/about'],
                  ['Industries', '/industries'],
                  ['Portfolio', '/portfolio'],
                  ['Blog', '/blog'],
                  ['Contact', '/contact'],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    component={RouterLink}
                    to={path}
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(4px)',
                      },
                      '&:focus-visible': {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: 3,
                        borderRadius: 1,
                      },
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Services */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 900,
                  mb: 1.25,
                  fontSize: '0.95rem',
                  color: 'text.primary',
                }}
              >
                Services
              </Typography>

              <Stack spacing={0.9}>
                {[
                  'Website Development',
                  'Mobile App Development',
                  'E-commerce Development',
                  'AI & Automation',
                  'Cloud & DevOps',
                  'Maintenance & Support',
                ].map((service) => (
                  <Link
                    key={service}
                    component={RouterLink}
                    to="/services"
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(4px)',
                      },
                      '&:focus-visible': {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: 3,
                        borderRadius: 1,
                      },
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Contact */}
            <Box sx={{ minWidth: { xs: '100%', sm: 280 } }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  mb: 1.25,
                  fontSize: '0.95rem',
                  color: 'text.primary',
                }}
              >
                Contact
              </Typography>

              <Stack spacing={0.9}>
                <Typography variant="body2" color="text.secondary">
                  General:{' '}
                  <Link
                    href="mailto:info@mensapingotech.in"
                    underline="hover"
                    color="primary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    info@mensapingotech.in
                  </Link>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Contact:{' '}
                  <Link
                    href="mailto:contact@mensapingotech.in"
                    underline="hover"
                    color="primary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    contact@mensapingotech.in
                  </Link>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Careers/Internship:{' '}
                  <Link
                    href="mailto:hr@mensapingotech.in"
                    underline="hover"
                    color="primary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    hr@mensapingotech.in
                  </Link>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Phone:{' '}
                  <Link
                    href="tel:+919106140115"
                    underline="hover"
                    color="primary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    +91 91061 40115
                  </Link>
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Address: Your office address here (India)
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: 'rgba(148, 163, 184, 0.35)' }} />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={1.5}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Menspingo. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              underline="hover"
              color="text.secondary"
              sx={{
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Privacy Policy
            </Link>

            <Link
              component={RouterLink}
              to="/terms"
              underline="hover"
              color="text.secondary"
              sx={{
                fontSize: '0.9rem',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Terms & Conditions
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}