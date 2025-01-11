import { Box, FormControl, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type FieldWrapperProps = PropsWithChildren<{
  label: string;
  required?: boolean;
  errorMessage?: string;
}>;

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  "errorMessage" | "children"
>;

export default function FieldWrapper({
  label,
  required,
  errorMessage,
  children,
}: FieldWrapperProps) {
  return (
    <FormControl fullWidth error={!!errorMessage}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.2 }}>
        <Box sx={{ display: "flex", gap: 0.2 }}>
          <Typography sx={{ fontSize: 14 }}>{label}</Typography>
          {required && (
            <Typography color="error" fontSize={12}>
              ※必須
            </Typography>
          )}
        </Box>
        {children}
        {errorMessage && (
          <Typography color="error" fontSize={12}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </FormControl>
  );
}
