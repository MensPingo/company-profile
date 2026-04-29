import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useMemo, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  // { label: 'Industries', to: '/industries' },
  // { label: 'Portfolio', to: '/portfolio' },
  // { label: 'Internship', to: '/internship' },
  // { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export function SiteHeader() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const activePath = useMemo(() => location.pathname, [location.pathname])

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 } }}>
          <Stack direction="row" alignItems="center" spacing={1.25} sx={{ flex: 1 }}>
            <Box
              component={RouterLink}
              to="/"
              aria-label="Menspingo"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                    gap: 0.1,
                }}
              >
                <Box
                  component="img"
                  src="/logo-mark.png"
                  alt="Menspingo logo"
                  sx={{
                    width: { xs: 34, md: 38 },
                    height: { xs: 34, md: 38 },
                    borderRadius: 2,
                    objectFit: 'contain',
                  }}
                />
                <Typography
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: 950,
                    letterSpacing: -0.6,
                    fontSize: { xs: 14, md: 15 },
                    mt: -0.15,
                  }}
                >
                  Menspingo
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => {
              const isActive = item.to === '/'
                ? activePath === '/'
                : activePath.startsWith(item.to)
              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  color={isActive ? 'primary' : 'inherit'}
                  variant={isActive ? 'contained' : 'text'}
                  size="small"
                >
                  {item.label}
                </Button>
              )
            })}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, ml: 1.25 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="small"
              sx={{ fontWeight: 800 }}
            >
              Get Free Consultation
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              edge="end"
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 320 } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography sx={{ fontWeight: 900, mb: 1.5 }}>menspingo</Typography>
          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                variant={activePath === item.to ? 'contained' : 'text'}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ pt: 1 }}>
              <Button
                component={RouterLink}
                to="/contact"
                onClick={() => setMobileOpen(false)}
                variant="contained"
                fullWidth
                sx={{ justifyContent: 'center', fontWeight: 900 }}
              >
                Get Free Consultation
              </Button>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}

