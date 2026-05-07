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
import { useState } from 'react'
import { PageSection } from '../components/common/PageSection.jsx'

const introPoints = [
  'A structured program focused on real deliverables, not just tutorials.',
  'Mentor review, GitHub PR workflow, and feedback loops to improve fast.',
  'Build industry-style projects with clean documentation and best practices.',
]

const whyJoin = [
  'Real project exposure with mentor review',
  'Weekly feedback and clean documentation habits',
  'Modern stack: React, Java/Spring Boot, APIs, and DevOps basics',
  'Certificate + performance-based opportunities',
]

const skillsLearn = [
  'Component-based UI development and responsive design',
  'API integration, authentication, and clean data flows',
  'GitHub PRs, code review, and professional collaboration habits',
  'Debugging, testing mindset, and release readiness basics',
]

const tracks = [
  'Frontend Development',
  'Backend Development',
  'Full Stack Development',
  'UI/UX Design',
  'QA Testing',
  'DevOps Basics',
]

const workflow = [
  'Apply',
  'Screening',
  'Task Assignment',
  'Mentor Review',
  'GitHub PR Submission',
  'Loom Video Walkthrough',
  'Feedback and Improvement',
  'Completion Certificate',
]

const tools = ['GitHub', 'VS Code', 'React', 'Java/Spring Boot', 'Postman', 'Docker', 'Loom']

const darkCardSx = {
  height: '100%',
  borderRadius: 5,
  overflow: 'hidden',
  border: '1px solid rgba(147, 197, 253, 0.20)',
  background:
    'linear-gradient(135deg, #0f172a 0%, #111827 48%, #172554 100%)',
  color: '#ffffff',
  boxShadow: '0 26px 80px rgba(15, 23, 42, 0.30)',
}

const lightCardSx = {
  height: '100%',
  borderRadius: 4,
  border: '1.5px solid rgba(37, 99, 235, 0.22)',
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
  boxShadow: '0 14px 38px rgba(15, 23, 42, 0.08)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: '#2563eb',
    boxShadow: '0 26px 66px rgba(37, 99, 235, 0.16)',
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

export function InternshipPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        background:
          'radial-gradient(circle at 8% 6%, rgba(37, 99, 235, 0.10), transparent 30%), radial-gradient(circle at 92% 14%, rgba(6, 182, 212, 0.10), transparent 28%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)',
      }}
    >
      <PageSection
        eyebrow="Internship Program"
        title="Internship program (Mentor-reviewed, GitHub-based)"
        subtitle="This is a structured internship program designed to build job-ready skills through real project work."
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={7}>
            <Card variant="outlined" sx={darkCardSx}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Chip
                  label="Real Project Internship"
                  sx={{
                    mb: 2,
                    fontWeight: 900,
                    color: '#bfdbfe',
                    bgcolor: 'rgba(59, 130, 246, 0.14)',
                    border: '1px solid rgba(147, 197, 253, 0.28)',
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.55rem', md: '2rem' },
                    letterSpacing: -0.7,
                    lineHeight: 1.15,
                  }}
                >
                  Internship program introduction
                </Typography>

                <Stack spacing={1.35} sx={{ mt: 2.25 }}>
                  {introPoints.map((p) => (
                    <DarkPoint key={p} text={p} />
                  ))}
                </Stack>

                <Divider sx={{ my: 3, borderColor: 'rgba(191, 219, 254, 0.18)' }} />

                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                    letterSpacing: -0.35,
                  }}
                >
                  Why join our internship
                </Typography>

                <Grid container spacing={1.5} sx={{ mt: 1.25 }}>
                  {whyJoin.map((p) => (
                    <Grid key={p} item xs={12} sm={6}>
                      <Box
                        sx={{
                          p: 1.5,
                          height: '100%',
                          borderRadius: 3,
                          bgcolor: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(191, 219, 254, 0.16)',
                        }}
                      >
                        <Typography sx={{ color: '#dbeafe', lineHeight: 1.65, fontWeight: 650 }}>
                          {p}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              variant="outlined"
              sx={{
                ...lightCardSx,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '0 0 auto 0',
                  height: 7,
                  background:
                    'linear-gradient(90deg, #1d4ed8 0%, #2563eb 48%, #06b6d4 100%)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.3rem', md: '1.55rem' },
                    letterSpacing: -0.45,
                    color: '#0f172a',
                  }}
                >
                  Skills interns will learn
                </Typography>

                <Stack spacing={1.35} sx={{ mt: 2 }}>
                  {skillsLearn.map((p, index) => (
                    <LightPoint key={p} index={index + 1} text={p} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Tracks"
        title="Available internship tracks"
        subtitle="Choose a primary track — we’ll assign tasks accordingly."
        sx={{
          background:
            'linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 64, 175, 0.94) 100%)',
          color: '#ffffff',
        }}
      >
        <Grid container spacing={2}>
          {tracks.map((t, index) => (
            <Grid key={t} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 2.25,
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(191, 219, 254, 0.20)',
                  boxShadow: '0 18px 44px rgba(15, 23, 42, 0.18)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255,255,255,0.12)',
                    borderColor: 'rgba(191, 219, 254, 0.38)',
                  },
                }}
              >
                <Typography sx={{ color: '#93c5fd', fontWeight: 950, mb: 0.75 }}>
                  Track {String(index + 1).padStart(2, '0')}
                </Typography>
                <Typography sx={{ fontWeight: 950, fontSize: '1.05rem' }}>{t}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Workflow"
        title="Internship workflow"
        subtitle="A professional workflow that matches real company delivery standards."
      >
        <Grid container spacing={2.5}>
          {workflow.map((w, idx) => (
            <Grid key={w} item xs={12} sm={6} md={3}>
              <Card
                variant="outlined"
                sx={{
                  ...lightCardSx,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'workflowIn 0.5s ease both',
                  animationDelay: `${idx * 70}ms`,
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
                  '@keyframes workflowIn': {
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
                <CardContent sx={{ p: 2.5, pl: 3 }}>
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 3,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: '#dbeafe',
                      color: '#1d4ed8',
                      border: '1px solid rgba(37, 99, 235, 0.26)',
                      fontWeight: 950,
                    }}
                  >
                    {idx + 1}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 950,
                      mt: 1.5,
                      color: '#0f172a',
                      letterSpacing: -0.2,
                    }}
                  >
                    {w}
                  </Typography>

                  <Typography sx={{ mt: 0.85, color: '#475569', lineHeight: 1.7 }}>
                    {w === 'GitHub PR Submission'
                      ? 'Submit work via PR with clean commits and descriptions.'
                      : w === 'Loom Video Walkthrough'
                        ? 'Explain your changes clearly in a short video.'
                        : 'Follow the structured process and mentor guidance.'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Tools"
        title="Tools interns will use"
        subtitle="Hands-on experience with modern development tooling."
        sx={{
          background:
            'linear-gradient(180deg, rgba(239,246,255,0.95) 0%, rgba(255,255,255,0.96) 100%)',
        }}
      >
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1.25 }}>
          {tools.map((t) => (
            <Chip
              key={t}
              label={t}
              sx={{
                borderRadius: 999,
                px: 0.75,
                py: 2.25,
                fontWeight: 900,
                bgcolor: '#ffffff',
                color: '#1d4ed8',
                border: '1.5px solid rgba(37, 99, 235, 0.28)',
                boxShadow: '0 10px 24px rgba(37, 99, 235, 0.08)',
                transition: 'all 0.22s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  bgcolor: '#dbeafe',
                  borderColor: '#2563eb',
                },
              }}
            />
          ))}
        </Stack>
      </PageSection>

      <PageSection
        eyebrow="Apply"
        title="Internship application form"
        subtitle="Fill the form and we’ll respond with screening and next steps."
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={7}>
            <Card
              variant="outlined"
              sx={{
                ...lightCardSx,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '0 0 auto 0',
                  height: 7,
                  background:
                    'linear-gradient(90deg, #1d4ed8 0%, #2563eb 48%, #06b6d4 100%)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.35rem', md: '1.6rem' },
                    letterSpacing: -0.45,
                    color: '#0f172a',
                  }}
                >
                  Apply for internship
                </Typography>

                <Typography sx={{ mt: 1, color: '#64748b', lineHeight: 1.7 }}>
                  Submit your details. We’ll review your profile and share screening/task assignment details.
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
                    const preferredRole = String(form.get('preferredRole') ?? '').trim()

                    if (!name || !email || !preferredRole) {
                      setError('Please fill in Full Name, Email, and Preferred Role.')
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

                  <TextField label="Full Name" name="name" required fullWidth sx={fieldSx} />
                  <TextField label="Email" name="email" type="email" required fullWidth sx={fieldSx} />
                  <TextField label="Phone" name="phone" fullWidth sx={fieldSx} />
                  <TextField label="College/Experience" name="collegeExperience" fullWidth sx={fieldSx} />

                  <TextField
                    select
                    label="Preferred Role"
                    name="preferredRole"
                    SelectProps={{ native: true }}
                    defaultValue=""
                    fullWidth
                    required
                    sx={fieldSx}
                  >
                    <option value="" disabled>
                      Select a track
                    </option>
                    {tracks.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </TextField>

                  <TextField label="GitHub Profile" name="github" fullWidth sx={fieldSx} />
                  <TextField label="LinkedIn Profile" name="linkedin" fullWidth sx={fieldSx} />

                  <TextField
                    label="Resume Upload (placeholder)"
                    name="resume"
                    helperText="Upload integration can be added next (Google Drive / email / backend)."
                    fullWidth
                    disabled
                    sx={fieldSx}
                  />

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
                    Apply for Internship
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              variant="outlined"
              sx={{
                ...darkCardSx,
                position: { md: 'sticky' },
                top: { md: 96 },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                <Chip
                  label="Next Steps"
                  sx={{
                    mb: 2,
                    fontWeight: 900,
                    color: '#bfdbfe',
                    bgcolor: 'rgba(59, 130, 246, 0.14)',
                    border: '1px solid rgba(147, 197, 253, 0.28)',
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.35rem', md: '1.6rem' },
                    letterSpacing: -0.45,
                  }}
                >
                  What happens next?
                </Typography>

                <Typography sx={{ mt: 1.25, color: '#dbeafe', lineHeight: 1.8 }}>
                  After you apply, we’ll do screening and share a task assignment. You’ll submit via GitHub PR and
                  record a Loom walkthrough for mentor review.
                </Typography>

                <Divider sx={{ my: 3, borderColor: 'rgba(191, 219, 254, 0.18)' }} />

                <Stack spacing={1.25}>
                  {['Application review', 'Screening task', 'GitHub PR submission', 'Mentor feedback'].map(
                    (item, index) => (
                      <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: 2,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'rgba(255,255,255,0.08)',
                            color: '#93c5fd',
                            border: '1px solid rgba(191, 219, 254, 0.18)',
                            fontWeight: 950,
                            flexShrink: 0,
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Typography sx={{ color: '#e0f2fe', fontWeight: 750 }}>{item}</Typography>
                      </Stack>
                    ),
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>
    </Box>
  )
}

function DarkPoint({ text }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start">
      <Box
        sx={{
          width: 9,
          height: 9,
          borderRadius: '50%',
          bgcolor: '#38bdf8',
          mt: 0.95,
          flexShrink: 0,
          boxShadow: '0 0 0 5px rgba(56, 189, 248, 0.10)',
        }}
      />
      <Typography sx={{ color: '#dbeafe', lineHeight: 1.75 }}>{text}</Typography>
    </Stack>
  )
}

function LightPoint({ index, text }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start">
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: 2,
          display: 'grid',
          placeItems: 'center',
          bgcolor: '#dbeafe',
          color: '#1d4ed8',
          border: '1px solid rgba(37, 99, 235, 0.24)',
          fontWeight: 950,
          flexShrink: 0,
        }}
      >
        {index}
      </Box>
      <Typography sx={{ color: '#475569', lineHeight: 1.75 }}>{text}</Typography>
    </Stack>
  )
}