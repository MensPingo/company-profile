import { Box, Container, type SxProps, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export function PageSection({
  eyebrow,
  title,
  subtitle,
  children,
  sx,
}: PropsWithChildren<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  sx?: SxProps;
}>) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 }, ...sx }}>
      <Container>
        <Box sx={{ maxWidth: 980 }}>
          {eyebrow ? (
            <Typography
              variant="overline"
              sx={{ fontWeight: 900, letterSpacing: 1.8, color: "primary.main" }}
            >
              {eyebrow}
            </Typography>
          ) : null}
          <Typography
            sx={{
              mt: eyebrow ? 0.75 : 0,
              fontWeight: 950,
              letterSpacing: -0.7,
              fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.8rem" },
              lineHeight: 1.15,
            }}
          >
            {title}
          </Typography>
          {subtitle ? (
            <Typography
              sx={{
                mt: 1.25,
                color: "text.secondary",
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.8,
                maxWidth: 820,
              }}
            >
              {subtitle}
            </Typography>
          ) : null}
        </Box>

        <Box sx={{ mt: 4 }}>{children}</Box>
      </Container>
    </Box>
  );
}

