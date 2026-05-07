"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link as MuiLink,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { PageSection } from "../../../components/common/PageSection";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    backgroundColor: "#ffffff",
    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
    "&:hover fieldset": {
      borderColor: "#2563eb",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.10)",
    },
  },
  "& .MuiInputLabel-root": {
    fontWeight: 700,
  },
} as const;

const contactCardSx = {
  borderRadius: { xs: 4, md: 5 },
  border: "1.5px solid rgba(37, 99, 235, 0.24)",
  background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
  boxShadow: "0 18px 52px rgba(15, 23, 42, 0.08)",
} as const;

export function ContactClient() {
  const searchParams = useSearchParams();
  const defaultService = useMemo(() => searchParams?.get("service") ?? "", [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const apiBase = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");
  const contactEndpoint = apiBase ? `${apiBase}/api/v1/contact` : "/api/v1/contact";

  return (
    <Box
      sx={{
        overflowX: "hidden",
        background:
          "radial-gradient(circle at 8% 8%, rgba(37, 99, 235, 0.08), transparent 28%), radial-gradient(circle at 92% 14%, rgba(6, 182, 212, 0.08), transparent 26%), linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f1f7ff 100%)",
      }}
    >
      <PageSection
        eyebrow="Contact"
        title="Let's discuss your project"
        subtitle="Share a few details and we'll get back with a clear plan and timeline."
      >
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Card
              variant="outlined"
              sx={{
                ...contactCardSx,
                position: "relative",
                overflow: "hidden",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "0 0 auto 0",
                  height: 7,
                  background: "linear-gradient(90deg, #1d4ed8 0%, #2563eb 48%, #06b6d4 100%)",
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4 } }}>
                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: "1.35rem", md: "1.65rem" },
                    letterSpacing: -0.45,
                    color: "#0f172a",
                  }}
                >
                  Tell us about your requirement
                </Typography>

                <Typography sx={{ mt: 1, color: "#64748b", lineHeight: 1.75 }}>
                  Fill this form with your basic project details. We'll review your requirement and suggest the right
                  website, software, automation, or cloud solution.
                </Typography>

                <Stack
                  component="form"
                  spacing={2}
                  sx={{ mt: 3 }}
                  onSubmit={(e) => {
                    e.preventDefault();

                    if (submitting) return;

                    setError("");
                    setSubmitted(false);
                    setSubmitting(true);

                    const run = async () => {
                      try {
                        const form = new FormData(e.currentTarget);
                        const name = String(form.get("name") ?? "").trim();
                        const email = String(form.get("email") ?? "").trim();
                        const message = String(form.get("message") ?? "").trim();

                        if (!name || !email || !message) {
                          setError("Please fill in name, email, and message.");
                          return;
                        }

                        const payload = {
                          name,
                          company: String(form.get("company") ?? "").trim() || undefined,
                          email,
                          phone: String(form.get("phone") ?? "").trim() || undefined,
                          serviceNeeded: String(form.get("service") ?? "").trim() || undefined,
                          budgetRange: String(form.get("budget") ?? "").trim() || undefined,
                          message,
                          website: String(form.get("website") ?? "").trim() || undefined,
                        };

                        const res = await fetch(contactEndpoint, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });

                        if (!res.ok) {
                          const text = await res.text().catch(() => "");
                          throw new Error(text || `Request failed (${res.status})`);
                        }

                        setSubmitted(true);
                        e.currentTarget.reset();
                      } catch (err) {
                        setError(err instanceof Error ? err.message : "Failed to submit.");
                      } finally {
                        setSubmitting(false);
                      }
                    };

                    void run();
                  }}
                >
                  {submitted ? (
                    <Alert severity="success" sx={{ borderRadius: 3 }}>
                      Thanks! Your message has been sent.
                    </Alert>
                  ) : null}
                  {error ? (
                    <Alert severity="error" sx={{ borderRadius: 3 }}>
                      {error}
                    </Alert>
                  ) : null}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField name="name" label="Your name" fullWidth required sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField name="email" label="Email" type="email" fullWidth required sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField name="phone" label="Phone" fullWidth sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField name="website" label="Website (optional)" fullWidth sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="company" label="Company (optional)" fullWidth sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="service" label="Service needed" fullWidth defaultValue={defaultService} sx={fieldSx} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="budget" label="Budget range (optional)" select fullWidth sx={fieldSx} defaultValue="">
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Under ₹25k">Under ₹25k</MenuItem>
                        <MenuItem value="₹25k–₹50k">₹25k–₹50k</MenuItem>
                        <MenuItem value="₹50k–₹1L">₹50k–₹1L</MenuItem>
                        <MenuItem value="₹1L+">₹1L+</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="message" label="Message" fullWidth required multiline minRows={4} sx={fieldSx} />
                    </Grid>
                  </Grid>

                  <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.35)" }} />

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button type="submit" variant="contained" endIcon={<ArrowForwardIcon />} disabled={submitting}>
                      Send message
                    </Button>

                    <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.6 }}>
                      {submitting ? "Sending…" : "We'll reply with next steps."}
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
                height: "100%",
                position: { md: "sticky" },
                top: { md: 96 },
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, rgba(21,94,239,0.12) 0%, rgba(124,58,237,0.08) 55%, rgba(6,182,212,0.10) 100%)",
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3.5, md: 4 } }}>
                <Typography sx={{ fontWeight: 950, fontSize: { xs: "1.35rem", md: "1.6rem" }, letterSpacing: -0.45, color: "#0f172a" }}>
                  Contact details
                </Typography>

                <Typography sx={{ mt: 1, color: "#475569", lineHeight: 1.75 }}>
                  India • Remote friendly. We support startups, local businesses, and growing teams with practical
                  software solutions.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "rgba(37, 99, 235, 0.18)" }} />

                <Stack spacing={2.25}>
                  <ContactInfo label="General" value="info@menspingo.in" href="mailto:info@menspingo.in" />
                  <ContactInfo label="Contact" value="contact@menspingo.in" href="mailto:contact@menspingo.in" />
                  <ContactInfo label="Careers / Internship" value="hr@menspingo.in" href="mailto:hr@menspingo.in" />
                  <ContactInfo label="Phone" value="+91 91061 40115" href="tel:+919106140115" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageSection>
    </Box>
  );
}

function ContactInfo({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: "0.95rem" }}>{label}</Typography>
      <MuiLink
        href={href}
        underline="hover"
        sx={{ display: "inline-block", mt: 0.35, color: "#2563eb", fontWeight: 800, wordBreak: "break-word" }}
      >
        {value}
      </MuiLink>
    </Box>
  );
}

