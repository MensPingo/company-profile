import { Box, Button, Container, Stack, Typography, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    title: 'AI-Powered Software Solutions for Modern Businesses',
    subtitle:
      'We build scalable websites, modern applications, and intelligent digital products for startups and growing businesses.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    title: 'Modern Web Development with Clean Engineering',
    subtitle:
      'Professional websites, responsive interfaces, and maintainable code designed for business growth.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    title: 'Build Faster with Cloud, APIs, and Automation',
    subtitle:
      'From backend systems to automation workflows, we help businesses launch with confidence.',
  },
]

export function HeaderSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 320, sm: 420, md: 520 },
        overflow: 'hidden',
        mt: { xs: '68px', sm: '72px', md: '76px', lg: '80px', xl: '84px' },
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: index === activeIndex ? 'relative' : 'absolute',
            inset: 0,
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 0.8s ease',
            height: '100%',
          }}
        >
          <Box
            sx={{
              minHeight: { xs: 320, sm: 420, md: 520 },
              backgroundImage: `linear-gradient(rgba(15,23,42,0.58), rgba(15,23,42,0.52)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container>
              <Box sx={{ maxWidth: 760 }}>
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: { xs: '1.7rem', sm: '2.2rem', md: '3rem' },
                    lineHeight: 1.15,
                    letterSpacing: -0.6,
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    color: 'rgba(255,255,255,0.88)',
                    fontSize: { xs: '0.96rem', md: '1.08rem' },
                    lineHeight: 1.8,
                    maxWidth: 650,
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      fontWeight: 900,
                      textTransform: 'none',
                      borderRadius: 3,
                      px: 3,
                    }}
                  >
                    Get Free Consultation
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      fontWeight: 900,
                      textTransform: 'none',
                      borderRadius: 3,
                      px: 3,
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.6)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                    }}
                  >
                    Explore Services
                  </Button>
                </Stack>
              </Box>
            </Container>
          </Box>
        </Box>
      ))}

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: { xs: 10, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255,255,255,0.16)',
          color: '#fff',
          backdropFilter: 'blur(6px)',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.26)',
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: { xs: 10, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255,255,255,0.16)',
          color: '#fff',
          backdropFilter: 'blur(6px)',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.26)',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: activeIndex === index ? 26 : 10,
              height: 10,
              borderRadius: 999,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backgroundColor: activeIndex === index ? '#2563eb' : 'rgba(255,255,255,0.7)',
            }}
          />
        ))}
      </Stack>
    </Box>
  )
}