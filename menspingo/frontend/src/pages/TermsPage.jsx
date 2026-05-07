import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import { PageSection } from '../components/common/PageSection.jsx'

export function TermsPage() {
  return (
    <PageSection
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="This is a template terms page. Replace placeholders with your final business details."
    >
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2.5}>
            <Section title="Use of website">
              By using this website, you agree to use it for lawful purposes and not attempt to disrupt, damage, or
              access restricted areas.
            </Section>

            <Divider />

            <Section title="Services">
              Information on services is provided for general understanding. Final scope, pricing, and timelines will be
              confirmed via proposal/contract.
            </Section>

            <Divider />

            <Section title="Intellectual property">
              All brand assets, content, and materials on this website are the property of MensaPingo Tech unless
              otherwise stated.
            </Section>

            <Divider />

            <Section title="Limitation of liability">
              We are not liable for indirect or consequential damages arising from use of this website. This template is
              provided as a starting point and should be reviewed by legal counsel.
            </Section>

            <Divider />

            <Section title="Contact">
              General:{' '}
              <strong>
                <a href="mailto:info@mensapingotech.in">info@mensapingotech.in</a>
              </strong>
              <br />
              Contact:{' '}
              <strong>
                <a href="mailto:contact@mensapingotech.in">contact@mensapingotech.in</a>
              </strong>
              <br />
              Careers/Internship:{' '}
              <strong>
                <a href="mailto:hr@mensapingotech.in">hr@mensapingotech.in</a>
              </strong>
            </Section>
          </Stack>
        </CardContent>
      </Card>
    </PageSection>
  )
}

function Section({ title, children }) {
  return (
    <Stack spacing={0.75}>
      <Typography sx={{ fontWeight: 950 }}>{title}</Typography>
      <Typography color="text.secondary">{children}</Typography>
    </Stack>
  )
}