import { Link, LinkProps, styled } from "@mui/material";

export const StyledLink = styled(Link)<LinkProps>(() => ({
  color: "#906cf4",
  textDecoration: "none",
  "&:after": {
    content: "''",
    backgroundColor: "#906cf4",
    height: "3px",
    width: 0,
    margin: "auto",
    transition: "0.3s",
    display: "block",
  },
  "&:hover:after": {
    width: "100%",
  },
}));
