import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useMemo, useState } from 'react'
import { PageSection } from '../components/common/PageSection.jsx'

const jobs = [
  {
    id: 'frontend-intern',
    roleName: 'Frontend Developer Intern',
    skills: ['React', 'Material UI', 'Responsive UI', 'GitHub'],
    experience: 'Intern / Fresher',
  },
  {
    id: 'backend-intern',
    roleName: 'Backend Developer Intern',
    skills: ['Java', 'Spring Boot', 'REST API', 'Postman'],
    experience: 'Intern / Fresher',
  },
  {
    id: 'fullstack-intern',
    roleName: 'Full Stack Developer Intern',
    skills: ['React', 'Java/Spring Boot', 'REST API', 'GitHub'],
    experience: 'Intern / Fresher',
  },
  {
    id: 'uiux-intern',
    roleName: 'UI/UX Designer Intern',
    skills: ['Wireframes', 'UI Design', 'Design Systems', 'Communication'],
    experience: 'Intern / Fresher',
  },
  {
    id: 'qa-intern',
    roleName: 'QA Tester Intern',
    skills: ['Test cases', 'Bug reporting', 'API testing basics', 'Attention to detail'],
    experience: 'Intern / Fresher',
  },
]

const whyWorkWithUs = [
  'Mentor-reviewed work culture with clear feedback loops',
  'Professional workflows: GitHub PRs, documentation, and demos',
  'Modern stack exposure: React, Java/Spring Boot, APIs, and DevOps basics',
  'Transparent communication and growth-focused tasks',
]

const culture = [
  'Quality-first delivery with clean documentation',
  'Security and scalable architecture mindset',
  'No confusion: clear tasks, timelines, and expected outcomes',
  'Learning by building real project modules',
]

const cardSx = {
  borderRadius: 4,
  border: '1.5px solid rgba(37, 99, 235, 0.22)',
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
  boxShadow: '0 12px 34px rgba(15, 23, 42, 0.08)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#2563eb',
    boxShadow: '0 24px 58px rgba(37, 99, 235, 0.16)',
  },
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    backgroundColor: '#ffffff',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
    '&:hover fieldset': {
      borderColor: '#2563eb',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.10)',
    },
  },
  '& .MuiInputLabel-root': {
    fontWeight: 700,
  },
}

export function CareersPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [selectedRole, setSelectedRole] = useState(jobs[0].roleName)
  const roleOptions = useMemo(() => jobs.map((r) => r.roleName), [])

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        background:
          'radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 90% 16%, rgba(124, 58, 237, 0.07), transparent 28%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)',
      }}
    >
      <PageSection
        eyebrow="Careers"
        title="Join Menspingo"
        subtitle="Explore our internship openings and apply with your details. We value quality, transparency, and continuous learning."
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={7}>
            <Card
              variant="outlined"
              sx={{
                ...cardSx,
                mb: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '0 0 auto 0',
                  height: 6,
                  background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 45%, #06b6d4 100%)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <SectionHeading number="01" title="Why work with us" />

                <Stack spacing={1.25} sx={{ mt: 2 }}>
                  {whyWorkWithUs.map((p) => (
                    <InfoPoint key={p} text={p} />
                  ))}
                </Stack>

                <Divider sx={{ my: 3, borderColor: 'rgba(148, 163, 184, 0.35)' }} />

                <SectionHeading number="02" title="Company culture" />

                <Stack spacing={1.25} sx={{ mt: 2 }}>
                  {culture.map((p) => (
                    <InfoPoint key={p} text={p} />
                  ))}
                </Stack>
              </CardContent>
            </Card>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.25}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              justifyContent="space-between"
              sx={{ mb: 1.75 }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                    letterSpacing: -0.35,
                    color: '#0f172a',
                  }}
                >
                  Current openings
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 0.35 }}>
                  Select a role and apply through the form.
                </Typography>
              </Box>

              <Chip
                label={`${jobs.length} Open Roles`}
                sx={{
                  fontWeight: 900,
                  color: '#1d4ed8',
                  bgcolor: '#dbeafe',
                  border: '1px solid rgba(37, 99, 235, 0.28)',
                }}
              />
            </Stack>

            <Grid container spacing={2.5}>
              {jobs.map((r, index) => (
                <Grid key={r.id} item xs={12}>
                  <Card
                    variant="outlined"
                    sx={{
                      ...cardSx,
                      position: 'relative',
                      overflow: 'hidden',
                      animation: 'careerCardIn 0.5s ease both',
                      animationDelay: `${index * 70}ms`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 5,
                        background:
                          'linear-gradient(180deg, #1d4ed8 0%, #2563eb 45%, #06b6d4 100%)',
                      },
                      '@keyframes careerCardIn': {
                        from: {
                          opacity: 0,
                          transform: 'translateY(14px)',
                        },
                        to: {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.5, md: 3 }, pl: { xs: 3, md: 3.5 } }}>
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1.5}
                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                      >
                        <BoxTitle title={r.roleName} subtitle={r.experience} />

                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            ml: { sm: 'auto' },
                            flexWrap: 'wrap',
                            gap: 1,
                          }}
                        >
                          {r.skills.map((t) => (
                            <Chip
                              key={t}
                              label={t}
                              size="small"
                              sx={{
                                borderRadius: 999,
                                fontWeight: 800,
                                bgcolor: '#eef6ff',
                                color: '#1d4ed8',
                                border: '1px solid rgba(37, 99, 235, 0.28)',
                                '&:hover': {
                                  bgcolor: '#dbeafe',
                                  borderColor: '#2563eb',
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </Stack>

                      <Typography variant="body2" sx={{ mt: 1.75, color: '#475569', lineHeight: 1.7 }}>
                        <strong>Skills required:</strong> {r.skills.join(', ')}
                      </Typography>

                      <Typography variant="body2" sx={{ mt: 0.5, color: '#475569', lineHeight: 1.7 }}>
                        <strong>Experience level:</strong> {r.experience}
                      </Typography>

                      <Button
                        size="small"
                        sx={{
                          mt: 1.75,
                          px: 2,
                          minHeight: 38,
                          borderRadius: 2.5,
                          fontWeight: 900,
                          textTransform: 'none',
                          color: '#2563eb',
                          bgcolor: '#eef6ff',
                          border: '1px solid rgba(37, 99, 235, 0.22)',
                          transition: 'all 0.25s ease',
                          '&:hover': {
                            bgcolor: '#2563eb',
                            color: '#ffffff',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 14px 30px rgba(37, 99, 235, 0.24)',
                          },
                          '&:focus-visible': {
                            outline: '3px solid rgba(37, 99, 235, 0.28)',
                            outlineOffset: 4,
                          },
                        }}
                        onClick={() => {
                          setSelectedRole(r.roleName)
                          const el = document.getElementById('career-apply')
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        endIcon={<ArrowForwardIcon />}
                      >
                        Apply for this role
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              variant="outlined"
              id="career-apply"
              sx={{
                borderRadius: 5,
                position: { md: 'sticky' },
                top: { md: 96 },
                overflow: 'hidden',
                border: '1.5px solid rgba(37, 99, 235, 0.26)',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                boxShadow:
                  '0 22px 70px rgba(37, 99, 235, 0.13), inset 0 1px 0 rgba(255,255,255,0.9)',
                '&::before': {
                  content: '""',
                  display: 'block',
                  height: 7,
                  background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 48%, #06b6d4 100%)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Chip
                  label="Career Application"
                  sx={{
                    mb: 1.5,
                    fontWeight: 900,
                    color: '#1d4ed8',
                    bgcolor: '#dbeafe',
                    border: '1px solid rgba(37, 99, 235, 0.26)',
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.35rem', md: '1.6rem' },
                    letterSpacing: -0.45,
                    color: '#0f172a',
                  }}
                >
                  Apply now
                </Typography>

                <Typography sx={{ mt: 1, color: '#64748b', lineHeight: 1.7 }}>
                  Fill the form below. Resume upload integration can be added next.
                </Typography>

                <Stack
                  component="form"
                  spacing={2}
                  sx={{ mt: 2.5 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setError('')

                    const form = new FormData(e.currentTarget)
                    const name = String(form.get('name') ?? '').trim()
                    const email = String(form.get('email') ?? '').trim()
                    const phone = String(form.get('phone') ?? '').trim()
                    const position = String(form.get('position') ?? '').trim()

                    if (!name || !email || !phone || !position) {
                      setError('Please fill in Name, Email, Phone, and Position Applied For.')
                      return
                    }

                    setSubmitted(true)
                  }}
                >
                  {submitted ? (
                    <Alert severity="success" sx={{ borderRadius: 3 }}>
                      Thanks! We’ll contact you soon.
                    </Alert>
                  ) : null}

                  {error ? (
                    <Alert severity="error" sx={{ borderRadius: 3 }}>
                      {error}
                    </Alert>
                  ) : null}

                  <TextField
                    select
                    label="Position Applied For"
                    name="position"
                    SelectProps={{ native: true }}
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    fullWidth
                    sx={fieldSx}
                  >
                    {roleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </TextField>

                  <TextField label="Name" name="name" required fullWidth sx={fieldSx} />
                  <TextField label="Email" name="email" type="email" required fullWidth sx={fieldSx} />
                  <TextField label="Phone" name="phone" required fullWidth sx={fieldSx} />

                  <TextField
                    label="Resume Upload (placeholder)"
                    helperText="Upload integration can be added next (Google Drive / email / backend)."
                    disabled
                    fullWidth
                    sx={fieldSx}
                  />

                  <TextField label="LinkedIn" name="linkedin" fullWidth sx={fieldSx} />
                  <TextField label="GitHub" name="github" fullWidth sx={fieldSx} />
                  <TextField label="Message" name="message" multiline minRows={4} fullWidth sx={fieldSx} />

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      minHeight: 52,
                      borderRadius: 3,
                      fontWeight: 950,
                      textTransform: 'none',
                      boxShadow: '0 18px 40px rgba(37, 99, 235, 0.28)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 24px 52px rgba(37, 99, 235, 0.36)',
                      },
                      '&:focus-visible': {
                        outline: '3px solid rgba(37, 99, 235, 0.30)',
                        outlineOffset: 4,
                      },
                    }}
                  >
                    Submit Application
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>
    </Box>
  )
}

function SectionHeading({ number, title }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center">
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: 2.5,
          display: 'grid',
          placeItems: 'center',
          bgcolor: '#dbeafe',
          color: '#1d4ed8',
          border: '1px solid rgba(37, 99, 235, 0.24)',
          fontWeight: 950,
        }}
      >
        {number}
      </Box>

      <Typography
        sx={{
          fontWeight: 950,
          fontSize: { xs: '1.15rem', md: '1.3rem' },
          letterSpacing: -0.3,
          color: '#0f172a',
        }}
      >
        {title}
      </Typography>
    </Stack>
  )
}

function InfoPoint({ text }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start">
      <Box
        sx={{
          width: 9,
          height: 9,
          borderRadius: '50%',
          bgcolor: '#2563eb',
          mt: 0.9,
          flexShrink: 0,
          boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.10)',
        }}
      />
      <Typography sx={{ color: '#475569', lineHeight: 1.75 }}>{text}</Typography>
    </Stack>
  )
}

function BoxTitle({ title, subtitle }) {
  return (
    <Stack>
      <Typography
        sx={{
          fontWeight: 950,
          fontSize: { xs: '1.05rem', md: '1.14rem' },
          letterSpacing: -0.25,
          color: '#0f172a',
        }}
      >
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: '#64748b', mt: 0.25 }}>
        {subtitle}
      </Typography>
    </Stack>
  )
}