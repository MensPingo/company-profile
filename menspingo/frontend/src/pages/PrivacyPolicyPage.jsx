import { Box, Typography, Stack, Divider, Paper, Link, Chip, Grid } from '@mui/material'

const sections = [
  { id: 'info', label: '1. Information We Collect' },
  { id: 'use', label: '2. How We Use Your Information' },
  { id: 'protection', label: '3. Data Protection' },
  { id: 'cookies', label: '4. Cookies' },
  { id: 'thirdparty', label: '5. Third-Party Services' },
  { id: 'contact', label: '6. Contact Details' },
  { id: 'updates', label: '7. Updates to This Privacy Policy' },
]

const listItemSx = {
  color: '#475569',
  lineHeight: 1.8,
  marginBottom: '6px',
}

const sectionCardSx = {
  p: { xs: 2.25, md: 3 },
  borderRadius: 4,
  border: '1.5px solid rgba(37, 99, 235, 0.18)',
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
  boxShadow: '0 12px 34px rgba(15, 23, 42, 0.06)',
  scrollMarginTop: 96,
}

const sectionTitleSx = {
  fontWeight: 950,
  letterSpacing: -0.35,
  color: '#0f172a',
  fontSize: { xs: '1.25rem', md: '1.45rem' },
}

const paragraphSx = {
  color: '#475569',
  lineHeight: 1.85,
  fontSize: { xs: '0.96rem', md: '1rem' },
}

export function PrivacyPolicyPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        overflowX: 'hidden',
        py: { xs: 4, md: 7 },
        px: { xs: 2, md: 3 },
        background:
          'radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.10), transparent 28%), radial-gradient(circle at 92% 12%, rgba(6, 182, 212, 0.10), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)',
      }}
    >
      <Box maxWidth="lg" mx="auto">
        {/* Header area */}
        <Paper
          elevation={0}
          sx={{
            mb: { xs: 3, md: 4 },
            p: { xs: 3, md: 5 },
            borderRadius: { xs: 4, md: 6 },
            position: 'relative',
            overflow: 'hidden',
            border: '1.5px solid rgba(37, 99, 235, 0.22)',
            background:
              'linear-gradient(135deg, #0f172a 0%, #111827 48%, #172554 100%)',
            color: '#ffffff',
            boxShadow: '0 28px 90px rgba(15, 23, 42, 0.28)',

            // Premium decorative glow
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 240,
              height: 240,
              right: -80,
              top: -90,
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.25)',
              filter: 'blur(10px)',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Chip
              label="Legal Document"
              sx={{
                mb: 2,
                fontWeight: 900,
                color: '#bfdbfe',
                bgcolor: 'rgba(59, 130, 246, 0.14)',
                border: '1px solid rgba(147, 197, 253, 0.28)',
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 950,
                letterSpacing: -1,
                lineHeight: 1.08,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
              }}
            >
              Privacy Policy
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                mt: 1.25,
                color: '#bfdbfe',
                fontWeight: 700,
              }}
            >
              Last Updated: <b>[Add Date]</b>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 900,
                color: '#dbeafe',
                lineHeight: 1.85,
                fontSize: { xs: '0.98rem', md: '1.05rem' },
              }}
            >
              At MensaPingo Tech, we respect your privacy and are committed to protecting the personal information you
              share with us. This Privacy Policy explains how we collect, use, protect, and manage your information when
              you visit our website, contact us, apply for internships, or use our services.
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
          {/* Sticky Table of Contents */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                position: { md: 'sticky' },
                top: { md: 96 },
                p: { xs: 2.5, md: 3 },
                borderRadius: 4,
                border: '1.5px solid rgba(37, 99, 235, 0.22)',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                boxShadow: '0 16px 44px rgba(15, 23, 42, 0.08)',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 950,
                  color: '#0f172a',
                  fontSize: '1.15rem',
                  letterSpacing: -0.25,
                }}
              >
                Table of Contents
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 0.75,
                  mb: 2,
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                Use these quick links to navigate each privacy section.
              </Typography>

              <Stack spacing={1}>
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    underline="none"
                    sx={{
                      display: 'block',
                      px: 1.5,
                      py: 1.15,
                      borderRadius: 2.5,
                      color: '#475569',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      border: '1px solid transparent',
                      transition: 'all 0.22s ease',
                      '&:hover': {
                        color: '#1d4ed8',
                        bgcolor: '#eef6ff',
                        borderColor: 'rgba(37, 99, 235, 0.22)',
                        transform: 'translateX(4px)',
                      },
                      '&:focus-visible': {
                        outline: '3px solid rgba(37, 99, 235, 0.25)',
                        outlineOffset: 3,
                      },
                    }}
                  >
                    {section.label}
                  </Link>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Main Policy Content */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2.5}>
              <Paper elevation={0} id="info" sx={sectionCardSx}>
                <SectionHeader number="01" title="Information We Collect" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  We may collect the following information through our website forms or communication channels:
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 1.5 }}>
                  <li style={listItemSx}>Full name</li>
                  <li style={listItemSx}>Email address</li>
                  <li style={listItemSx}>Phone number / WhatsApp number</li>
                  <li style={listItemSx}>Company or organization name</li>
                  <li style={listItemSx}>Project requirements or service details</li>
                  <li style={listItemSx}>Budget range and preferred contact method</li>
                  <li style={listItemSx}>LinkedIn, GitHub, or portfolio links for internship/career applications</li>
                  <li style={listItemSx}>Resume or profile information if submitted for internship or career opportunities</li>
                  <li style={listItemSx}>Basic website usage information such as browser type, device type, and pages visited</li>
                </Box>

                <Typography sx={paragraphSx}>
                  We only collect information that is necessary to respond to inquiries, provide services, or process
                  internship/career applications.
                </Typography>
              </Paper>

              <Paper elevation={0} id="use" sx={sectionCardSx}>
                <SectionHeader number="02" title="How We Use Your Information" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  We use the collected information for the following purposes:
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 1.5 }}>
                  <li style={listItemSx}>To respond to your queries or service requests</li>
                  <li style={listItemSx}>To understand your project requirements</li>
                  <li style={listItemSx}>To provide software development, IT consulting, and support services</li>
                  <li style={listItemSx}>To process internship or career applications</li>
                  <li style={listItemSx}>To communicate updates related to our services</li>
                  <li style={listItemSx}>To improve our website, content, and user experience</li>
                  <li style={listItemSx}>To maintain internal records and business communication</li>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: '#eef6ff',
                    border: '1px solid rgba(37, 99, 235, 0.22)',
                  }}
                >
                  <Typography sx={{ color: '#1d4ed8', fontWeight: 900, lineHeight: 1.7 }}>
                    We do not sell, rent, or trade your personal information to any third party.
                  </Typography>
                </Box>
              </Paper>

              <Paper elevation={0} id="protection" sx={sectionCardSx}>
                <SectionHeader number="03" title="Data Protection" />
                <Stack spacing={1.25} sx={{ mt: 1.5 }}>
                  <Typography sx={paragraphSx}>
                    We take reasonable security measures to protect your information from unauthorized access, misuse,
                    loss, or disclosure.
                  </Typography>
                  <Typography sx={paragraphSx}>
                    However, please note that no method of online data transmission or storage is 100% secure. While we
                    work to protect your information, we cannot guarantee absolute security.
                  </Typography>
                  <Typography sx={paragraphSx}>
                    Access to submitted information is limited to authorized members of MensaPingo Tech who need it for
                    business, service, hiring, or support purposes.
                  </Typography>
                </Stack>
              </Paper>

              <Paper elevation={0} id="cookies" sx={sectionCardSx}>
                <SectionHeader number="04" title="Cookies" />
                <Stack spacing={1.25} sx={{ mt: 1.5 }}>
                  <Typography sx={paragraphSx}>
                    Our website may use cookies or similar technologies to improve user experience, analyze website
                    performance, and understand visitor behavior.
                  </Typography>
                  <Typography sx={paragraphSx}>Cookies may help us:</Typography>
                </Stack>

                <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 1.5 }}>
                  <li style={listItemSx}>Remember basic user preferences</li>
                  <li style={listItemSx}>Improve website loading and performance</li>
                  <li style={listItemSx}>Analyze traffic and page interactions</li>
                  <li style={listItemSx}>Improve our content and services</li>
                </Box>

                <Typography sx={paragraphSx}>
                  You can disable cookies from your browser settings. However, some parts of the website may not work
                  properly if cookies are disabled.
                </Typography>
              </Paper>

              <Paper elevation={0} id="thirdparty" sx={sectionCardSx}>
                <SectionHeader number="05" title="Third-Party Services" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  Our website may use third-party tools or links such as:
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 1.5 }}>
                  <li style={listItemSx}>Google Analytics or similar analytics tools</li>
                  <li style={listItemSx}>EmailJS, Google Forms, or backend APIs for form submissions</li>
                  <li style={listItemSx}>GitHub for project references</li>
                  <li style={listItemSx}>LinkedIn for company updates and professional networking</li>
                  <li style={listItemSx}>WhatsApp for direct communication</li>
                  <li style={listItemSx}>Hosting, domain, and cloud service providers</li>
                </Box>

                <Typography sx={paragraphSx}>
                  These third-party services may collect data according to their own privacy policies. MensaPingo Tech is
                  not responsible for the privacy practices of external websites or services.
                </Typography>
              </Paper>

              <Paper elevation={0} id="contact" sx={sectionCardSx}>
                <SectionHeader number="06" title="Contact Details" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  For any privacy-related questions, data correction requests, or concerns, you can contact us at:
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    p: 2.25,
                    borderRadius: 4,
                    bgcolor: '#ffffff',
                    border: '1px solid rgba(37, 99, 235, 0.20)',
                  }}
                >
                  <Stack spacing={1}>
                    <Typography sx={{ fontWeight: 950, color: '#0f172a' }}>MensaPingo Tech</Typography>

                    <ContactLine label="General Email" value="info@mensapingotech.in" href="mailto:info@mensapingotech.in" />
                    <ContactLine
                      label="Support / Contact Email"
                      value="contact@mensapingotech.in"
                      href="mailto:contact@mensapingotech.in"
                    />
                    <ContactLine
                      label="HR / Internship Email"
                      value="hr@mensapingotech.in"
                      href="mailto:hr@mensapingotech.in"
                    />

                    <Typography sx={{ color: '#475569', lineHeight: 1.7 }}>
                      <b>Location:</b> India
                    </Typography>
                  </Stack>
                </Box>
              </Paper>

              <Paper elevation={0} id="updates" sx={sectionCardSx}>
                <SectionHeader number="07" title="Updates to This Privacy Policy" />
                <Stack spacing={1.25} sx={{ mt: 1.5 }}>
                  <Typography sx={paragraphSx}>
                    We may update this Privacy Policy from time to time to reflect changes in our website, services, or
                    legal requirements. Any updates will be posted on this page with a revised “Last Updated” date.
                  </Typography>
                  <Typography sx={paragraphSx}>
                    By using our website, contacting us, or submitting any form, you agree to this Privacy Policy.
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

function SectionHeader({ number, title }) {
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
          flexShrink: 0,
        }}
      >
        {number}
      </Box>

      <Typography sx={sectionTitleSx}>{title}</Typography>
    </Stack>
  )
}

function ContactLine({ label, value, href }) {
  return (
    <Typography sx={{ color: '#475569', lineHeight: 1.7 }}>
      <b>{label}:</b>{' '}
      <Link
        href={href}
        underline="hover"
        sx={{
          color: '#2563eb',
          fontWeight: 850,
          wordBreak: 'break-word',
          '&:hover': {
            color: '#1d4ed8',
          },
        }}
      >
        {value}
      </Link>
    </Typography>
  )
}

export default PrivacyPolicyPage