"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Alert, Box, Button, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { PageSection } from "../../../../components/common/PageSection";
import { caseStudies } from "../../../../content/siteContent";

const mainCardSx = {
  borderRadius: { xs: 4, md: 5 },
  border: "1.5px solid rgba(37, 99, 235, 0.22)",
  background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
  boxShadow: "0 16px 44px rgba(15, 23, 42, 0.08)",
} as const;

const paragraphSx = {
  mt: 1,
  color: "#475569",
  lineHeight: 1.85,
  fontSize: { xs: "0.96rem", md: "1.02rem" },
} as const;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);

  if (!cs) {
    return (
      <Box sx={{ minHeight: "70vh", background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 48%, #f1f7ff 100%)" }}>
        <PageSection eyebrow="Case study" title="Case study not found" subtitle="Please check the URL or explore our portfolio.">
          <Card variant="outlined" sx={{ borderRadius: 4, border: "1.5px solid rgba(245, 158, 11, 0.35)", background: "linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)", boxShadow: "0 14px 36px rgba(15, 23, 42, 0.08)" }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Alert severity="warning" sx={{ borderRadius: 3 }}>
                This case study page doesn't exist yet.
              </Alert>
              <Box sx={{ mt: 2.5 }}>
                <Button component={Link} href="/portfolio" variant="contained" startIcon={<ArrowBackIcon />}>
                  Back to Portfolio
                </Button>
              </Box>
            </CardContent>
          </Card>
        </PageSection>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        overflowX: "hidden",
        background:
          "radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 92% 12%, rgba(124, 58, 237, 0.08), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)",
      }}
    >
      <PageSection eyebrow={`Case study • ${cs.category}`} title={cs.title} subtitle={cs.result}>
        <Stack spacing={{ xs: 2.5, md: 3 }}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            <Chip label={cs.category} sx={{ fontWeight: 900, color: "#1d4ed8", bgcolor: "#dbeafe", border: "1px solid rgba(37, 99, 235, 0.32)" }} />
            {cs.stack.map((t) => (
              <Chip key={t} label={t} sx={{ borderRadius: 999, fontWeight: 800, bgcolor: "#eef6ff", color: "#1d4ed8", border: "1px solid rgba(37, 99, 235, 0.28)" }} />
            ))}
          </Stack>

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            <Grid item xs={12} md={8}>
              <Card variant="outlined" sx={{ ...mainCardSx, position: "relative", overflow: "hidden" }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <CaseSection number="01" title="Problem" text={cs.problem} />
                  <Divider sx={{ my: 2.5, borderColor: "rgba(148, 163, 184, 0.35)" }} />
                  <CaseSection number="02" title="Solution" text={cs.solution} />
                  <Divider sx={{ my: 2.5, borderColor: "rgba(148, 163, 184, 0.35)" }} />
                  <CaseSection number="03" title="Result" text={cs.result} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={mainCardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ fontWeight: 950, letterSpacing: -0.45, lineHeight: 1.2, color: "#0f172a", fontSize: { xs: "1.25rem", md: "1.45rem" } }}>
                    Want a similar project?
                  </Typography>
                  <Typography sx={paragraphSx}>Tell us your scope and we'll suggest the right stack, timeline, and roadmap.</Typography>
                  <Divider sx={{ my: 2.5, borderColor: "rgba(37, 99, 235, 0.18)" }} />
                  <Stack spacing={1.25}>
                    <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForwardIcon />}>
                      Get Free Consultation
                    </Button>
                    <Button component={Link} href="/services" variant="outlined">
                      Explore Services
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Button component={Link} href="/portfolio" startIcon={<ArrowBackIcon />}>
            Back to Portfolio
          </Button>
        </Stack>
      </PageSection>
    </Box>
  );
}

function CaseSection({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <Stack spacing={1.25}>
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box sx={{ width: 42, height: 42, borderRadius: 2.5, display: "grid", placeItems: "center", bgcolor: "#dbeafe", color: "#1d4ed8", border: "1px solid rgba(37, 99, 235, 0.24)", fontWeight: 950 }}>
          {number}
        </Box>
        <Typography sx={{ fontWeight: 950, letterSpacing: -0.35, color: "#0f172a", fontSize: { xs: "1.2rem", md: "1.4rem" } }}>
          {title}
        </Typography>
      </Stack>
      <Typography sx={paragraphSx}>{text}</Typography>
    </Stack>
  );
}

