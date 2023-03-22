import { Chip, ChipProps, styled } from "@mui/material";

export const StyledChip = styled(Chip)<ChipProps>(() => ({
  borderRadius: 0,
  bottom: 0,
  position: "absolute",
  right: 0,
  backgroundColor: "#ded7fd59",
  "& .MuiChip-label": {
    color: "#906cf4",
    letterSpacing: 2.5,
    textTransform: "uppercase",
  },
}));
