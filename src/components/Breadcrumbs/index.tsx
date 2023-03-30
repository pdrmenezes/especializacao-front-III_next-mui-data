import type { LinkProps } from "@mui/material";
import { Link, Typography, Breadcrumbs as MuiBreadcrumbs, Box, Icon } from "@mui/material";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const mapIcon = new Map<string, Record<string, string>>([
  ["dashboard", { label: "Início", icon: "home" }],
  ["acoes", { label: "Ações", icon: "calendar_today" }],
  ["parceiros", { label: "Parceiros", icon: "people" }],
  ["vitrine", { label: "Vitrine", icon: "work" }],
  ["novo", { label: "Novo", icon: "add" }],
]);

function LinkRouter(props: LinkRouterProps) {
  return <Link variant="body1" {...props} component={RouterLink} />;
}

const Item = ({ value }: { value: string }) => (
  <>
    <Icon fontSize="small" sx={{ mr: 1 }}>
      {mapIcon.get(value)?.icon ?? ""}
    </Icon>
    {mapIcon.get(value)?.label ?? ""}
  </>
);

const defaultStyles = { display: "flex", alignItems: "center" };

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box sx={{ mt: 2 }} role="presentation">
      <MuiBreadcrumbs aria-label="breadcrumb">
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography sx={defaultStyles} color="inherit">
              <Item value={value} />
            </Typography>
          ) : (
            <LinkRouter underline="hover" sx={defaultStyles} color="primary.200" to={to}>
              <Item value={value} />
            </LinkRouter>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};
