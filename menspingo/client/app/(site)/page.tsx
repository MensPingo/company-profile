"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import HandymanIcon from "@mui/icons-material/Handyman";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageSection } from "../../components/common/PageSection";
import { HeaderSlider } from "../../components/layout/HeaderSlider";

const MotionBox = motion.create(Box);

const serviceCards = [
  {
    title: "Website Development",
    icon: <LanguageIcon fontSize="small" />,
    desc: "Premium corporate websites, landing pages, SEO-ready and fast.",
  },
  {
    title: "Mobile App Development",
    icon: <PhoneIphoneIcon fontSize="small" />,
    desc: "Modern mobile apps with clean UI/UX and performance-first builds.",
  },
  {
    title: "E-commerce Development",
    icon: <ShoppingCartIcon fontSize="small" />,
    desc: "Storefronts, checkout flows, payments, and conversion-focused UX.",
  },
  {
    title: "Custom Software Development",
    icon: <SettingsSuggestIcon fontSize="small" />,
    desc: "Dashboards, portals, internal tools, and scalable product engineering.",
  },
  {
    title: "AI & Automation",
    icon: <AutoAwesomeIcon fontSize="small" />,
    desc: "AI workflows, assistants, and automation that saves time and reduces errors.",
  },
  {
    title: "Cloud & DevOps",
    icon: <CloudIcon fontSize="small" />,
    desc: "CI/CD, hosting, monitoring, reliability, and cost optimization.",
  },
  {
    title: "Software Maintenance & Support",
    icon: <HandymanIcon fontSize="small" />,
    desc: "Bug fixes, enhancements, upgrades, and long-term support.",
  },
];

const whyChooseUs = [
  "Experienced Java/Spring Boot, React, Cloud and AI-focused team",
  "Affordable startup-friendly pricing",
  "Secure and scalable architecture",
  "Fast delivery with clean documentation",
  "Transparent development process",
  "Internship-based development ecosystem with mentor review",
];

const techStack = [
  "Java",
  "Spring Boot",
  "React.js",
  "HTML",
  "Material UI",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Docker",
  "GitHub",
  "REST API",
  "JWT",
  "AI Tools",
];

const projects = [
  {
    name: "E-commerce Platform",
    desc: "Product catalog, cart, checkout, admin tools, and analytics-ready setup.",
    stack: ["React", "Payments", "REST API"],
  },
  {
    name: "Appointment Booking System",
    desc: "Scheduling, reminders, admin management, and customer communication flow.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "Packaging Business Website",
    desc: "Premium corporate site with service pages and lead-generation sections.",
    stack: ["React", "SEO", "Material UI"],
  },
  {
    name: "Admin Dashboard",
    desc: "Role-based access, data tables, KPIs, and responsive UI components.",
    stack: ["React", "JWT", "REST API"],
  },
  {
    name: "CRM / ERP Mini System",
    desc: "Leads, tasks, pipelines, reporting, and team workflows for growing businesses.",
    stack: ["React", "Java", "Spring Boot"],
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understand goals, scope, and success metrics." },
  { title: "Planning", desc: "Timeline, architecture, and clear deliverables." },
  { title: "UI/UX Design", desc: "Wireframes, flows, and premium interface design." },
  { title: "Development", desc: "Clean code, scalable structure, and regular updates." },
  { title: "Testing", desc: "QA, performance checks, and security basics." },
  { title: "Deployment", desc: "Release with CI/CD and monitoring readiness." },
  { title: "Maintenance & Support", desc: "Improvements, fixes, and long-term reliability." },
];

const testimonials = [
  {
    name: "Priya S.",
    role: "Founder, SaaS Startup",
    quote:
      "Menspingo delivered a clean, premium UI and a stable architecture. Communication was transparent and the delivery was fast.",
  },
  {
    name: "Amit R.",
    role: "Operations Lead, E-commerce",
    quote:
      "They improved performance and UX across our checkout flow. The team documented everything clearly and handled releases smoothly.",
  },
  {
    name: "Neha K.",
    role: "Product Manager",
    quote: "Professional, reliable, and focused on quality delivery.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeaderSlider />

      <PageSection
        eyebrow="Services"
        title="Premium software services for startups and growing businesses"
        subtitle="Websites, mobile apps, custom software, cloud, and automation — built with a clean engineering mindset."
      >
        <Grid container spacing={2.5}>
          {serviceCards.map((s, idx) => (
            <Grid key={s.title} item xs={12} sm={6} md={4}>
              <MotionBox
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
              >
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 3,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: "rgba(21,94,239,0.08)",
                          color: "primary.main",
                          border: "1px solid rgba(21,94,239,0.16)",
                        }}
                      >
                        {s.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 950 }}>{s.title}</Typography>
                    </Stack>
                    <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
                      {s.desc}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button component={Link} href="/services" size="small" endIcon={<ArrowForwardIcon />}>
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection
        eyebrow="Why Menspingo"
        title="A delivery-first team you can rely on"
        subtitle="Transparent execution, secure builds, and quality outcomes — with practical communication."
        sx={{ backgroundColor: "rgba(21,94,239,0.04)" }}
      >
        <Grid container spacing={2.5}>
          {whyChooseUs.map((item) => (
            <Grid key={item} item xs={12} sm={6}>
              <Stack direction="row" spacing={1.25} alignItems="flex-start">
                <CheckCircleIcon sx={{ mt: "2px", color: "success.main" }} fontSize="small" />
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </PageSection>

      <PageSection eyebrow="Tech Stack" title="Modern stack for modern products" subtitle="We pick the right stack for your product goals, maintainability, and scale.">
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {techStack.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Stack>
      </PageSection>

      <PageSection eyebrow="Work" title="Selected project experience" subtitle="A snapshot of product types we build for startups and growing businesses.">
        <Grid container spacing={2.5}>
          {projects.map((p) => (
            <Grid key={p.name} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent sx={{ pb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {p.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {p.desc}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: "wrap", gap: 1 }}>
                    {p.stack.map((s) => (
                      <Chip key={s} label={s} size="small" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button component={Link} href="/contact" size="small" endIcon={<ArrowOutwardIcon />}>
                    Discuss Similar Project
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
        subtitle="You always know what's happening, what's next, and what we're delivering."
        sx={{ backgroundColor: "rgba(21,94,239,0.04)" }}
      >
        <Grid container spacing={2.5}>
          {processSteps.map((s, idx) => (
            <Grid key={s.title} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 1.6, color: "primary.main" }}>
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

      <PageSection eyebrow="Testimonials" title="What clients say" subtitle="Professional, reliable, and focused on quality delivery.">
        <Grid container spacing={2.5}>
          {testimonials.map((t) => (
            <Grid key={t.name} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: "100%" }}>
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
            "radial-gradient(1200px 600px at 20% 30%, rgba(21,94,239,0.16), transparent 60%), radial-gradient(1000px 600px at 80% 40%, rgba(6,182,212,0.12), transparent 55%), linear-gradient(180deg, rgba(11,18,32,0.03) 0%, rgba(255,255,255,1) 75%)",
        }}
      >
        <Container>
          <Card
            variant="outlined"
            sx={{
              overflow: "hidden",
              borderRadius: 6,
              background:
                "linear-gradient(135deg, rgba(21,94,239,0.10) 0%, rgba(124,58,237,0.08) 50%, rgba(6,182,212,0.08) 100%)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Grid container spacing={2.5} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" sx={{ fontWeight: 950, letterSpacing: -0.6 }}>
                    Have an idea? Let's build your software.
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.25, maxWidth: 820 }}>
                    Share your requirements and we'll suggest the right plan — timeline, stack, and execution approach.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={1.25} justifyContent="flex-end">
                    <Button component={Link} href="/contact" variant="contained" size="large">
                      Schedule Free Call
                    </Button>
                    <Button component={Link} href="/services" variant="outlined" size="large">
                      View Services
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

