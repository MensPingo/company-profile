import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LanguageIcon from '@mui/icons-material/Language'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CloudIcon from '@mui/icons-material/Cloud'
import HandymanIcon from '@mui/icons-material/Handyman'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { PageSection } from '../components/common/PageSection.jsx'
import { HeaderSlider } from '../components/layout/HeaderSlider.jsx'
// import { HeaderSlider } from '../components/HeaderSlider.jsx'


const MotionBox = motion.create(Box)

const serviceCards = [
  {
    title: 'Website Development',
    icon: <LanguageIcon fontSize="small" />,
    desc: 'Premium corporate websites, landing pages, SEO-ready and fast.',
  },
  {
    title: 'Mobile App Development',
    icon: <PhoneIphoneIcon fontSize="small" />,
    desc: 'Modern mobile apps with clean UI/UX and performance-first builds.',
  },
  {
    title: 'E-commerce Development',
    icon: <ShoppingCartIcon fontSize="small" />,
    desc: 'Storefronts, checkout flows, payments, and conversion-focused UX.',
  },
  {
    title: 'Custom Software Development',
    icon: <SettingsSuggestIcon fontSize="small" />,
    desc: 'Dashboards, portals, internal tools, and scalable product engineering.',
  },
  {
    title: 'AI & Automation',
    icon: <AutoAwesomeIcon fontSize="small" />,
    desc: 'AI workflows, assistants, and automation that saves time and reduces errors.',
  },
  {
    title: 'Cloud & DevOps',
    icon: <CloudIcon fontSize="small" />,
    desc: 'CI/CD, hosting, monitoring, reliability, and cost optimization.',
  },
  {
    title: 'Software Maintenance & Support',
    icon: <HandymanIcon fontSize="small" />,
    desc: 'Bug fixes, enhancements, upgrades, and long-term support.',
  },
]

const whyChooseUs = [
  'Experienced Java/Spring Boot, React, Cloud and AI-focused team',
  'Affordable startup-friendly pricing',
  'Secure and scalable architecture',
  'Fast delivery with clean documentation',
  'Transparent development process',
  'Internship-based development ecosystem with mentor review',
]

const techStack = [
  'Java',
  'Spring Boot',
  'React.js',
  'HTML',
  'Material UI',
  'Node.js',
  'PostgreSQL',
  'MySQL',
  'AWS',
  'Docker',
  'GitHub',
  'REST API',
  'JWT',
  'AI Tools',
]

const projects = [
  {
    name: 'E-commerce Platform',
    desc: 'Product catalog, cart, checkout, admin tools, and analytics-ready setup.',
    stack: ['React', 'Payments', 'REST API'],
  },
  {
    name: 'Appointment Booking System',
    desc: 'Scheduling, reminders, admin management, and customer communication flow.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Packaging Business Website',
    desc: 'Premium corporate site with service pages and lead-generation sections.',
    stack: ['React', 'SEO', 'Material UI'],
  },
  {
    name: 'Admin Dashboard',
    desc: 'Role-based access, data tables, KPIs, and responsive UI components.',
    stack: ['React', 'JWT', 'REST API'],
  },
  {
    name: 'CRM / ERP Mini System',
    desc: 'Leads, tasks, pipelines, reporting, and team workflows for growing businesses.',
    stack: ['React', 'Java', 'Spring Boot'],
  },
]

const processSteps = [
  { title: 'Discovery', desc: 'Understand goals, scope, and success metrics.' },
  { title: 'Planning', desc: 'Timeline, architecture, and clear deliverables.' },
  { title: 'UI/UX Design', desc: 'Wireframes, flows, and premium interface design.' },
  { title: 'Development', desc: 'Clean code, scalable structure, and regular updates.' },
  { title: 'Testing', desc: 'QA, performance checks, and security basics.' },
  { title: 'Deployment', desc: 'Release with CI/CD and monitoring readiness.' },
  { title: 'Maintenance & Support', desc: 'Improvements, fixes, and long-term reliability.' },
]

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Founder, SaaS Startup',
    quote:
      'Menspingo delivered a clean, premium UI and a stable architecture. Communication was transparent and the delivery was fast.',
  },
  {
    name: 'Amit R.',
    role: 'Operations Lead, E-commerce',
    quote:
      'They improved performance and UX across our checkout flow. The team documented everything clearly and handled releases smoothly.',
  },
  {
    name: 'Neha K.',
    role: 'Product Manager',
    quote:
      'Reliable engineering with thoughtful design. They understood requirements quickly and shipped features in an organized way.',
  },
]

export function HomePage() {
  return (
    <>
     <HeaderSlider />
      <PageSection
        eyebrow="AI-Powered IT Solutions Company"
        title="We Build AI-Powered Software Solutions for Modern Businesses"
        subtitle="Custom websites, mobile apps, cloud solutions, and AI automation for startups and growing companies."
        sx={{
          py: { xs: 7, md: 12 },
          background:
            'radial-gradient(1200px 600px at 10% 10%, rgba(21,94,239,0.14), transparent 60%), radial-gradient(1000px 600px at 90% 20%, rgba(124,58,237,0.12), transparent 60%)',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={2.25}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ alignItems: { sm: 'center' } }}>
                <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardIcon />}>
                  Get Free Consultation
                </Button>
                <Button component={RouterLink} to="/portfolio" variant="outlined" endIcon={<ArrowOutwardIcon />}>
                  View Our Work
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Java + Spring Boot" />
                <Chip label="React.js" />
                <Chip label="Cloud + DevOps" />
                <Chip label="AI Automation" />
              </Stack>

              <MotionBox
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <Typography sx={{ fontWeight: 900 }}>Trusted delivery for modern businesses</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                  Clear timelines, premium UI, secure architecture, and transparent updates.
                </Typography>
              </MotionBox>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              variant="outlined"
              sx={{
                overflow: 'hidden',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.66) 100%)',
              }}
            >
              <Box
                component="img"
                src="/logo-banner.png"
                alt="Modern IT and AI illustration placeholder"
                sx={{ width: '100%', height: { xs: 260, md: 320 }, objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Services"
        title="Services built for startups and growing businesses"
        subtitle="Choose one service or a full engagement — we deliver premium UI, secure architecture, and reliable timelines."
      >
        <Grid container spacing={2.5}>
          {serviceCards.map((s) => (
            <Grid key={s.title} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent sx={{ pb: 1 }}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: 'grid',
                        placeItems: 'center',
                        color: 'primary.main',
                        backgroundColor: 'rgba(21,94,239,0.08)',
                      }}
                    >
                      {s.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      {s.title}
                    </Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ mt: 1.25 }}>
                    {s.desc}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button component={RouterLink} to="/services" size="small" endIcon={<ArrowForwardIcon />}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Why choose us"
        title="Professional delivery, with startup-friendly execution"
        subtitle="A practical team focused on outcomes — reliable quality, transparency, and future-ready builds."
        sx={{ backgroundColor: 'rgba(11,18,32,0.02)' }}
      >
        <Grid container spacing={2.5}>
          {whyChooseUs.map((point) => (
            <Grid key={point} item xs={12} md={6}>
              <Stack direction="row" spacing={1.25} alignItems="flex-start">
                <CheckCircleIcon sx={{ mt: 0.35, color: 'primary.main' }} fontSize="small" />
                <Typography sx={{ fontWeight: 700 }}>{point}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Technology"
        title="A modern stack for scalable software"
        subtitle="We use reliable, widely adopted technologies — with best practices for security, performance, and maintainability."
      >
        <Grid container spacing={2}>
          {techStack.map((t) => (
            <Grid key={t} item xs={6} sm={4} md={3}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 100%)',
                }}
              >
                <CardContent sx={{ py: 2.25 }}>
                  <Typography sx={{ fontWeight: 900 }}>{t}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Production-ready
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Portfolio"
        title="Sample projects we can deliver"
        subtitle="A few examples across industries — we tailor the solution to your goals, timeline, and budget."
      >
        <Grid container spacing={2.5}>
          {projects.map((p) => (
            <Grid key={p.name} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent sx={{ pb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {p.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {p.desc}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
                    {p.stack.map((s) => (
                      <Chip key={s} label={s} size="small" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button component={RouterLink} to="/portfolio" size="small" endIcon={<ArrowOutwardIcon />}>
                    View Case Study
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Process"
        title="A clear, reliable development process"
        subtitle="You always know what’s happening, what’s next, and what we’re delivering."
        sx={{ backgroundColor: 'rgba(21,94,239,0.04)' }}
      >
        <Grid container spacing={2.5}>
          {processSteps.map((s, idx) => (
            <Grid key={s.title} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.6, color: 'primary.main' }}>
                    Step {idx + 1}
                  </Typography>
                  <Typography sx={{ fontWeight: 900, mt: 0.5 }}>{s.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Testimonials"
        title="What clients say"
        subtitle="Professional, reliable, and focused on quality delivery."
      >
        <Grid container spacing={2.5}>
          {testimonials.map((t) => (
            <Grid key={t.name} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 900 }}>{t.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {t.role}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography color="text.secondary">“{t.quote}”</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 9 },
          background:
            'radial-gradient(1200px 600px at 20% 30%, rgba(21,94,239,0.16), transparent 60%), radial-gradient(1000px 600px at 80% 40%, rgba(6,182,212,0.12), transparent 55%), linear-gradient(180deg, rgba(11,18,32,0.03) 0%, rgba(255,255,255,1) 75%)',
        }}
      >
        <Container>
          <Card
            variant="outlined"
            sx={{
              overflow: 'hidden',
              borderRadius: 6,
              background:
                'linear-gradient(135deg, rgba(21,94,239,0.10) 0%, rgba(124,58,237,0.08) 50%, rgba(6,182,212,0.08) 100%)',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Grid container spacing={2.5} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" sx={{ fontWeight: 950, letterSpacing: -0.6 }}>
                    Have an idea? Let’s build your software.
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.25, maxWidth: 820 }}>
                    Share your requirements and we’ll suggest the right plan — timeline, stack, and execution approach.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1.25} justifyContent="flex-end">
                    <Button component={RouterLink} to="/contact" variant="contained" size="large">
                      Schedule Free Call
                    </Button>
                    <Button component={RouterLink} to="/portfolio" variant="outlined" size="large">
                      View Our Work
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}

