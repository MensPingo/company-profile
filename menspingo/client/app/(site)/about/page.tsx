"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { PageSection } from "../../../components/common/PageSection";

const coreValues = [
  { title: "Client-first approach", desc: "We understand business goals first and then build the right technical solution." },
  { title: "Transparency", desc: "We keep communication clear with honest timelines, regular updates, and practical suggestions." },
  { title: "Security-first mindset", desc: "We follow secure development practices for authentication, APIs, data handling, and deployments." },
  { title: "Quality delivery", desc: "We focus on clean code, responsive UI, scalable architecture, and maintainable project structure." },
];

const team = [
  { name: "Founder / Backend Lead", role: "Java • Spring Boot • Microservices • System Design" },
  { name: "Frontend Development", role: "React • Material UI • Responsive UI • Landing Pages" },
  { name: "Cloud & DevOps", role: "AWS • Docker • GitHub • Deployment Support" },
  { name: "AI & Automation", role: "AI Chatbot • Workflow Automation • API Integration" },
];

const premiumCardSx = {
  height: "100%",
  borderRadius: 4,
  borderColor: "rgba(148, 163, 184, 0.24)",
  background: "rgba(255, 255, 255, 0.82)",
  backdropFilter: "blur(14px)",
  boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
  transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "rgba(37, 99, 235, 0.32)",
    boxShadow: "0 26px 70px rgba(15, 23, 42, 0.12)",
  },
} as const;

const paragraphSx = { mt: 1, color: "text.secondary", lineHeight: 1.8, fontSize: { xs: "0.95rem", md: "1rem" } } as const;
const cardTitleSx = { fontWeight: 950, letterSpacing: -0.25, color: "text.primary" } as const;

export default function AboutPage() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        background:
          "radial-gradient(circle at 10% 5%, rgba(37, 99, 235, 0.08), transparent 30%), radial-gradient(circle at 90% 15%, rgba(124, 58, 237, 0.08), transparent 28%)",
      }}
    >
      <PageSection
        eyebrow="About Us"
        title="Building future-ready software with AI-powered thinking"
        subtitle="Menspingo is an Indian IT services startup focused on building modern websites, scalable backend systems, cloud-ready applications, and AI-powered digital solutions for startups and growing businesses."
      >
        <Card
          variant="outlined"
          sx={{
            overflow: "hidden",
            borderRadius: { xs: 4, md: 6 },
            borderColor: "rgba(37, 99, 235, 0.18)",
            position: "relative",
            boxShadow: "0 28px 90px rgba(37, 99, 235, 0.12)",
            background: "linear-gradient(135deg, rgba(21,94,239,0.12) 0%, rgba(124,58,237,0.09) 55%, rgba(6,182,212,0.10) 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              width: 220,
              height: 220,
              right: -70,
              top: -80,
              borderRadius: "50%",
              background: "rgba(37, 99, 235, 0.14)",
              filter: "blur(8px)",
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, position: "relative", zIndex: 1 }}>
            <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
              <Grid item xs={12} md={8}>
                <Chip
                  label="Modern IT Services • AI • Cloud • Web"
                  size="small"
                  sx={{
                    mb: 2,
                    fontWeight: 800,
                    color: "primary.main",
                    bgcolor: "rgba(37, 99, 235, 0.09)",
                    border: "1px solid rgba(37, 99, 235, 0.16)",
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 950,
                    letterSpacing: -0.8,
                    fontSize: { xs: "1.85rem", sm: "2.2rem", md: "2.55rem" },
                    lineHeight: 1.12,
                  }}
                >
                  Company introduction
                </Typography>

                <Typography sx={{ ...paragraphSx, mt: 1.5, maxWidth: 820 }}>
                  Menspingo helps startups and growing businesses build products that feel premium and work reliably.
                  From websites and landing pages to backend systems, dashboards, cloud deployments, and AI workflows —
                  we focus on practical outcomes and clean engineering.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                  <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                    Get Free Consultation
                  </Button>
                  <Button component={Link} href="/services" variant="outlined" size="large">
                    Explore Services
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={1.5}>
                  {coreValues.map((v) => (
                    <Card key={v.title} variant="outlined" sx={{ ...premiumCardSx, p: 0 }}>
                      <CardContent sx={{ p: { xs: 2.25, md: 2.5 } }}>
                        <Typography sx={{ ...cardTitleSx }}>{v.title}</Typography>
                        <Typography sx={{ ...paragraphSx, mt: 0.75 }}>{v.desc}</Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </PageSection>

      <PageSection
        eyebrow="Team"
        title="Meet the team"
        subtitle="A focused technology team working with clean development practices and transparent delivery culture."
        sx={{ background: "linear-gradient(180deg, rgba(248,250,252,0.75) 0%, rgba(255,255,255,0.95) 100%)" }}
      >
        <Grid container spacing={2.5}>
          {team.map((m) => (
            <Grid key={m.name} item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={premiumCardSx}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 999,
                      background: "linear-gradient(135deg, rgba(21,94,239,0.22) 0%, rgba(124,58,237,0.16) 55%, rgba(6,182,212,0.16) 100%)",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                      boxShadow: "0 16px 34px rgba(37, 99, 235, 0.13)",
                    }}
                  />

                  <Typography sx={{ ...cardTitleSx, mt: 2 }}>{m.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.7 }}>
                    {m.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </Box>
  );
}

