"use client";

import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { PageSection } from "../../../components/common/PageSection";
import type { ReactNode } from "react";

export default function TermsPage() {
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
              Information on services is provided for general understanding. Final scope, pricing, and timelines will
              be confirmed via proposal/contract.
            </Section>

            <Divider />

            <Section title="Intellectual property">
              All brand assets, content, and materials on this website are the property of Menspingo unless otherwise
              stated.
            </Section>

            <Divider />

            <Section title="Limitation of liability">
              We are not liable for indirect or consequential damages arising from use of this website. This template is
              provided as a starting point and should be reviewed by legal counsel.
            </Section>

            <Divider />

            <Section title="Contact">
              General: <strong>info@menspingo.in</strong>
              <br />
              Contact: <strong>contact@menspingo.in</strong>
              <br />
              Careers/Internship: <strong>hr@menspingo.in</strong>
            </Section>
          </Stack>
        </CardContent>
      </Card>
    </PageSection>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack spacing={0.75}>
      <Typography sx={{ fontWeight: 950 }}>{title}</Typography>
      <Typography color="text.secondary">{children}</Typography>
    </Stack>
  );
}
