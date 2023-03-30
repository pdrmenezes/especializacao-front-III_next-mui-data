import type { ReactNode } from "react";
import { Breadcrumbs } from "@components";
import { Box, Typography, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br.js";
import { Form } from "react-router-dom";

export const CadastroBase = ({ title, children }: { title: string; children: ReactNode }) => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Typography variant="h5">{title}</Typography>
      <Breadcrumbs />
      <Box
        component={Form}
        method="post"
        sx={{
          mt: 4,
          px: [1, 4],
          width: 1,
          maxWidth: theme.breakpoints.values.md,
        }}
      >
        {children}
      </Box>
    </LocalizationProvider>
  );
};
