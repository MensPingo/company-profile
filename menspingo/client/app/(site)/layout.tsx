"use client";

import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SiteHeader />

      <Box component="main" sx={{ flex: 1, pt: { xs: 8, md: 10 } }}>
        {children}
      </Box>

      <SiteFooter />
    </Box>
  );
}

