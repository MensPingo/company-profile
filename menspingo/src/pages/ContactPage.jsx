import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import { PageSection } from '../components/common/PageSection.jsx'

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

const contactCardSx = {
  borderRadius: { xs: 4, md: 5 },
  border: '1.5px solid rgba(37, 99, 235, 0.24)',
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
  boxShadow: '0 18px 52px rgba(15, 23, 42, 0.08)',
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        background:
          'radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 92% 14%, rgba(6, 182, 212, 0.08), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)',
      }}
    >
      <PageSection
        eyebrow="Contact"
        title="Let’s discuss your project"
        subtitle="Share a few details and we’ll get back with a clear plan and timeline."
      >
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Card
              variant="outlined"
              sx={{
                ...contactCardSx,
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
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
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4 } }}>
                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '1.35rem', md: '1.65rem' },
                    letterSpacing: -0.45,
                    color: '#0f172a',
                  }}
                >
                  Tell us about your requirement
                </Typography>

                <Typography sx={{ mt: 1, color: '#64748b', lineHeight: 1.75 }}>
                  Fill this form with your basic project details. We’ll review your requirement and suggest the right
                  website, software, automation, or cloud solution.
                </Typography>

                <Stack
                  component="form"
                  spacing={2}
                  sx={{ mt: 3 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setError('')

                    const form = new FormData(e.currentTarget)
                    const name = String(form.get('name') ?? '').trim()
                    const email = String(form.get('email') ?? '').trim()
                    const message = String(form.get('message') ?? '').trim()

                    if (!name || !email || !message) {
                      setError('Please fill in name, email, and message.')
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

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField label="Full name" name="name" required fullWidth sx={fieldSx} />
                    <TextField label="Company" name="company" fullWidth sx={fieldSx} />
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField label="Email" name="email" type="email" required fullWidth sx={fieldSx} />
                    <TextField label="Phone (India)" name="phone" fullWidth sx={fieldSx} />
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      select
                      label="Service Needed"
                      name="service"
                      defaultValue=""
                      fullWidth
                      sx={fieldSx}
                    >
                      <MenuItem value="">Select service</MenuItem>
                      <MenuItem value="website-development">Website Development</MenuItem>
                      <MenuItem value="ecommerce-development">E-commerce Development</MenuItem>
                      <MenuItem value="custom-software">Custom Software Development</MenuItem>
                      <MenuItem value="ai-automation">AI & Automation</MenuItem>
                      <MenuItem value="cloud-devops">Cloud & DevOps</MenuItem>
                      <MenuItem value="maintenance-support">Maintenance & Support</MenuItem>
                    </TextField>

                    <TextField select label="Budget Range" name="budget" defaultValue="" fullWidth sx={fieldSx}>
                      <MenuItem value="">Select budget</MenuItem>
                      <MenuItem value="under-25k">Under ₹25,000</MenuItem>
                      <MenuItem value="25k-50k">₹25,000 - ₹50,000</MenuItem>
                      <MenuItem value="50k-1l">₹50,000 - ₹1,00,000</MenuItem>
                      <MenuItem value="1l-plus">₹1,00,000+</MenuItem>
                    </TextField>
                  </Stack>

                  <TextField
                    label="How can we help?"
                    name="message"
                    required
                    fullWidth
                    multiline
                    minRows={5}
                    sx={fieldSx}
                  />

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1.5}
                    alignItems={{ xs: 'stretch', sm: 'center' }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        minHeight: 52,
                        px: 3,
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
                      Send message
                    </Button>

                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                      This form is ready for backend/email integration next.
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              variant="outlined"
              sx={{
                ...contactCardSx,
                height: '100%',
                position: { md: 'sticky' },
                top: { md: 96 },
                overflow: 'hidden',
                background:
                  'linear-gradient(135deg, rgba(21,94,239,0.12) 0%, rgba(124,58,237,0.08) 55%, rgba(6,182,212,0.10) 100%)',
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4 } }}>
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: '#ffffff',
                    color: '#2563eb',
                    fontWeight: 950,
                    fontSize: '1.35rem',
                    border: '1px solid rgba(37, 99, 235, 0.22)',
                    boxShadow: '0 16px 34px rgba(37, 99, 235, 0.14)',
                  }}
                >
                  MP
                </Box>

                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: 950,
                    fontSize: { xs: '1.35rem', md: '1.6rem' },
                    letterSpacing: -0.45,
                    color: '#0f172a',
                  }}
                >
                  Contact details
                </Typography>

                <Typography sx={{ mt: 1, color: '#475569', lineHeight: 1.75 }}>
                  India · Remote friendly. We support startups, local businesses, and growing teams with practical
                  software solutions.
                </Typography>

                <Divider sx={{ my: 3, borderColor: 'rgba(37, 99, 235, 0.18)' }} />

                <Stack spacing={2.25}>
                  <ContactInfo
                    label="General"
                    value="info@mensapingotech.in"
                    href="mailto:info@mensapingotech.in"
                  />

                  <ContactInfo
                    label="Contact"
                    value="contact@mensapingotech.in"
                    href="mailto:contact@mensapingotech.in"
                  />

                  <ContactInfo
                    label="Careers / Internship"
                    value="hr@mensapingotech.in"
                    href="mailto:hr@mensapingotech.in"
                  />

                  <ContactInfo label="Phone" value="+91 91061 40115" href="tel:+919106140115" />
                </Stack>

                <Box
                  sx={{
                    mt: 3,
                    p: 2.25,
                    borderRadius: 4,
                    bgcolor: '#ffffff',
                    border: '1px solid rgba(37, 99, 235, 0.18)',
                  }}
                >
                  <Typography sx={{ fontWeight: 900, color: '#0f172a' }}>Response time</Typography>
                  <Typography variant="body2" sx={{ mt: 0.75, color: '#64748b', lineHeight: 1.65 }}>
                    We usually review project enquiries and respond with next steps as soon as possible.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>
    </Box>
  )
}

function ContactInfo({ label, value, href }) {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 900,
          color: '#0f172a',
          fontSize: '0.95rem',
        }}
      >
        {label}
      </Typography>

      <Link
        href={href}
        underline="hover"
        sx={{
          display: 'inline-block',
          mt: 0.35,
          color: '#2563eb',
          fontWeight: 800,
          wordBreak: 'break-word',
          '&:hover': {
            color: '#1d4ed8',
          },
        }}
      >
        {value}
      </Link>
    </Box>
  )
}