import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useMemo, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
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
    backgroundColor: '#ececec',
    borderBottom: '1px solid',
    borderColor: 'rgba(15, 23, 42, 0.08)',
    color: 'text.primary',
    boxShadow: 'none',
  }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 80, sm: 90, md: 105, lg: 115, xl: 125 } }}>
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
                  src="/logo.png"
                  alt="menspingo logo"
                  sx={{
                     width: { xs: 80, sm: 95, md: 110, lg: 120, xl: 130 },
                    height: { xs: 80, sm: 95, md: 110, lg: 120, xl: 130 },
                    margin: {
                      xs: '2px 6px',
                      sm: '2px 8px',
                      md: '3px 10px',
                      lg: '3px 12px',
                      xl: '3px 13px',
                    },
                    borderRadius: '50%',
                    objectFit: 'contain',
                    mb: { xs: 0, md: 0 },
                  }}
                />
              </Box>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => {
              const isActive = item.to === '/' ? activePath === '/' : activePath.startsWith(item.to)

              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  color={isActive ? 'primary' : 'inherit'}
                  variant={isActive ? 'contained' : 'text'}
                  size="small"
                  sx={{ fontSize: '0.95rem' }} // <-- Set font size for desktop nav buttons

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="menspingo logo"
              sx={{
                width: { xs: 90, sm: 110, md: 140, lg: 170, xl: 200 },
                height: { xs: 90, sm: 110, md: 140, lg: 170, xl: 200 },
                margin: {
                  xs: '2px 6px',
                  sm: '3px 10px',
                  md: '4px 14px',
                  lg: '5px 20px',
                  xl: '5px 27px',
                },
                borderRadius: '50%',
                objectFit: 'contain',
              }}
            />
          </Box>

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