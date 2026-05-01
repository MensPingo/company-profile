import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { SiteFooter } from './SiteFooter.jsx'
import { SiteHeader } from './SiteHeader.jsx'

export function AppShell() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SiteHeader />

      <Box component="main" sx={{ flex: 1, pt: { xs: 8, md: 10 } }}>
        <Outlet />
      </Box>

      <SiteFooter />
    </Box>
  )
}