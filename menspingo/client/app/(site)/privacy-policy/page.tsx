"use client";

import { Box, Chip, Grid, Link as MuiLink, Paper, Stack, Typography } from "@mui/material";
import { useMemo } from "react";

const sections = [
  { id: "info", label: "1. Information We Collect" },
  { id: "use", label: "2. How We Use Your Information" },
  { id: "protection", label: "3. Data Protection" },
  { id: "cookies", label: "4. Cookies" },
  { id: "thirdparty", label: "5. Third-Party Services" },
  { id: "contact", label: "6. Contact Details" },
  { id: "updates", label: "7. Updates to This Privacy Policy" },
];

const sectionCardSx = {
  p: { xs: 2.25, md: 3 },
  borderRadius: 4,
  border: "1.5px solid rgba(37, 99, 235, 0.18)",
  background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
  boxShadow: "0 12px 34px rgba(15, 23, 42, 0.06)",
  scrollMarginTop: 96,
} as const;

const sectionTitleSx = {
  fontWeight: 950,
  letterSpacing: -0.35,
  color: "#0f172a",
  fontSize: { xs: "1.25rem", md: "1.45rem" },
} as const;

const paragraphSx = {
  color: "#475569",
  lineHeight: 1.85,
  fontSize: { xs: "0.96rem", md: "1rem" },
} as const;

export default function PrivacyPolicyPage() {
  const lastUpdated = useMemo(() => new Date().toLocaleDateString("en-IN"), []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowX: "hidden",
        py: { xs: 4, md: 7 },
        px: { xs: 2, md: 3 },
        background:
          "radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.10), transparent 28%), radial-gradient(circle at 92% 12%, rgba(6, 182, 212, 0.10), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)",
      }}
    >
      <Box maxWidth="lg" mx="auto">
        <Paper
          elevation={0}
          sx={{
            mb: { xs: 3, md: 4 },
            p: { xs: 3, md: 5 },
            borderRadius: { xs: 4, md: 6 },
            position: "relative",
            overflow: "hidden",
            border: "1.5px solid rgba(37, 99, 235, 0.22)",
            background: "linear-gradient(135deg, #0f172a 0%, #111827 48%, #172554 100%)",
            color: "#ffffff",
            boxShadow: "0 28px 90px rgba(15, 23, 42, 0.28)",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Chip
              label="Legal Document"
              sx={{
                mb: 2,
                fontWeight: 900,
                color: "#bfdbfe",
                bgcolor: "rgba(59, 130, 246, 0.14)",
                border: "1px solid rgba(147, 197, 253, 0.28)",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 950,
                letterSpacing: -1,
                lineHeight: 1.08,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
              }}
            >
              Privacy Policy
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: 1.25, color: "#bfdbfe", fontWeight: 700 }}>
              Last Updated: <b>{lastUpdated}</b>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 900,
                color: "#dbeafe",
                lineHeight: 1.85,
                fontSize: { xs: "0.98rem", md: "1.05rem" },
              }}
            >
              We respect your privacy and are committed to protecting the personal information you share with us. This
              policy explains how we collect, use, and protect your information.
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                position: { md: "sticky" },
                top: { md: 96 },
                p: { xs: 2.5, md: 3 },
                borderRadius: 4,
                border: "1.5px solid rgba(37, 99, 235, 0.22)",
                background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                boxShadow: "0 16px 44px rgba(15, 23, 42, 0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 950, color: "#0f172a", mb: 1.5 }}>Contents</Typography>
              <Stack spacing={1}>
                {sections.map((s) => (
                  <MuiLink key={s.id} href={`#${s.id}`} underline="none" sx={{ fontWeight: 800, color: "#2563eb" }}>
                    {s.label}
                  </MuiLink>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={2.5}>
              <Paper elevation={0} id="info" sx={sectionCardSx}>
                <SectionHeader number="01" title="Information We Collect" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  We may collect information you submit via forms (name, email, phone, and message) and basic analytics
                  data.
                </Typography>
              </Paper>

              <Paper elevation={0} id="use" sx={sectionCardSx}>
                <SectionHeader number="02" title="How We Use Your Information" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  We use your information to respond to enquiries, provide services, and improve our website.
                </Typography>
              </Paper>

              <Paper elevation={0} id="protection" sx={sectionCardSx}>
                <SectionHeader number="03" title="Data Protection" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  We apply reasonable safeguards to protect data, but no system is 100% secure.
                </Typography>
              </Paper>

              <Paper elevation={0} id="cookies" sx={sectionCardSx}>
                <SectionHeader number="04" title="Cookies" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  Cookies may be used for analytics and basic functionality. You can disable cookies in your browser,
                  though parts of the site may not work properly.
                </Typography>
              </Paper>

              <Paper elevation={0} id="thirdparty" sx={sectionCardSx}>
                <SectionHeader number="05" title="Third-Party Services" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  Our website may link to third-party services (e.g., analytics or social platforms). Their policies
                  apply.
                </Typography>
              </Paper>

              <Paper elevation={0} id="contact" sx={sectionCardSx}>
                <SectionHeader number="06" title="Contact Details" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  For privacy-related questions, contact <b>info@menspingo.in</b>.
                </Typography>
              </Paper>

              <Paper elevation={0} id="updates" sx={sectionCardSx}>
                <SectionHeader number="07" title="Updates to This Privacy Policy" />
                <Typography sx={{ ...paragraphSx, mt: 1.5 }}>
                  We may update this policy from time to time. Updates will be posted on this page with a revised
                  "Last Updated" date.
                </Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center">
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: 2.5,
          display: "grid",
          placeItems: "center",
          bgcolor: "#dbeafe",
          color: "#1d4ed8",
          border: "1px solid rgba(37, 99, 235, 0.24)",
          fontWeight: 950,
          flexShrink: 0,
        }}
      >
        {number}
      </Box>

      <Typography sx={sectionTitleSx}>{title}</Typography>
    </Stack>
  );
}

