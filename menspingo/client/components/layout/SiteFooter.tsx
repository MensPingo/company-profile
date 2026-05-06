"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Divider, IconButton, Link as MuiLink, Stack, Typography } from "@mui/material";
import Link from "next/link";

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: { xs: 5, md: 7 },
        mt: 6,
        background:
          "linear-gradient(180deg, rgba(248,250,252,0.96) 0%, rgba(239,246,255,0.82) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-start" }}
        >
          <Box sx={{ maxWidth: 420 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                component="img"
                src="/logo.png"
                alt="Menspingo logo"
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2.5,
                  objectFit: "contain",
                  boxShadow: "0 10px 28px rgba(37, 99, 235, 0.16)",
                }}
              />
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: 1.5,
                lineHeight: 1.75,
                maxWidth: 390,
              }}
            >
              AI-powered IT solutions company for startups and growing businesses. We design, develop, and scale
              intelligent software solutions for the future.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                aria-label="LinkedIn"
                size="small"
                component="a"
                href="https://www.linkedin.com/company/mensapingo-tech/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    boxShadow: "0 12px 24px rgba(37, 99, 235, 0.22)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="GitHub"
                size="small"
                component="a"
                href="https://github.com/MensPingo"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    bgcolor: "grey.900",
                    color: "#fff",
                    boxShadow: "0 12px 24px rgba(15, 23, 42, 0.2)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="YouTube"
                size="small"
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    bgcolor: "error.main",
                    color: "error.contrastText",
                    boxShadow: "0 12px 24px rgba(220, 38, 38, 0.2)",
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3.5, sm: 5 }}
            sx={{
              flexWrap: "wrap",
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 900, mb: 1.25, fontSize: "0.95rem", color: "text.primary" }}>
                Quick links
              </Typography>
              <Stack spacing={0.75}>
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <MuiLink
                    key={l.href}
                    component={Link}
                    href={l.href}
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(4px)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid",
                        outlineColor: "primary.main",
                        outlineOffset: 3,
                        borderRadius: 1,
                      },
                    }}
                  >
                    {l.label}
                  </MuiLink>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 900, mb: 1.25, fontSize: "0.95rem", color: "text.primary" }}>
                Services
              </Typography>
              <Stack spacing={0.75}>
                {[
                  "Website Development",
                  "Mobile App Development",
                  "E-commerce Development",
                  "AI & Automation",
                  "Cloud & DevOps",
                  "Maintenance & Support",
                ].map((service) => (
                  <MuiLink
                    key={service}
                    component={Link}
                    href="/services"
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(4px)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid",
                        outlineColor: "primary.main",
                        outlineOffset: 3,
                        borderRadius: 1,
                      },
                    }}
                  >
                    {service}
                  </MuiLink>
                ))}
              </Stack>
            </Box>

            <Box sx={{ minWidth: { xs: "100%", sm: 280 } }}>
              <Typography sx={{ fontWeight: 900, mb: 1.25, fontSize: "0.95rem", color: "text.primary" }}>
                Contact
              </Typography>

              <Stack spacing={0.9}>
                <Typography variant="body2" color="text.secondary">
                  General:{" "}
                  <MuiLink href="mailto:info@menspingo.in" underline="hover" color="primary.main" sx={{ fontWeight: 700 }}>
                    info@menspingo.in
                  </MuiLink>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Contact:{" "}
                  <MuiLink
                    href="mailto:contact@menspingo.in"
                    underline="hover"
                    color="primary.main"
                    sx={{ fontWeight: 700 }}
                  >
                    contact@menspingo.in
                  </MuiLink>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Careers/Internship:{" "}
                  <MuiLink href="mailto:hr@menspingo.in" underline="hover" color="primary.main" sx={{ fontWeight: 700 }}>
                    hr@menspingo.in
                  </MuiLink>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Phone:{" "}
                  <MuiLink href="tel:+919106140115" underline="hover" color="primary.main" sx={{ fontWeight: 700 }}>
                    +91 91061 40115
                  </MuiLink>
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Address: India (Remote-friendly)
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: "rgba(148, 163, 184, 0.35)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Menspingo. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
            <MuiLink
              component={Link}
              href="/privacy-policy"
              underline="hover"
              color="text.secondary"
              sx={{ fontSize: "0.9rem", "&:hover": { color: "primary.main" } }}
            >
              Privacy Policy
            </MuiLink>

            <MuiLink
              component={Link}
              href="/terms"
              underline="hover"
              color="text.secondary"
              sx={{ fontSize: "0.9rem", "&:hover": { color: "primary.main" } }}
            >
              Terms & Conditions
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

