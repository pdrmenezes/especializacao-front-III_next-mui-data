import { StyledChip } from "@/components/Chip";
import FavButton from "@/components/FavButton";
import { StyledLink } from "@/components/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function Mui() {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontWeight: 500, fontSize: 24 }}>Inscreva-se em nossa newsletter</Typography>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Nome" variant="outlined" sx={{ width: 1 }} />
        </Grid>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: 1 }} />
        </Grid>

        <Button variant="contained" sx={{ width: 1, color: "primary.contrastText" }}>
          Inscreva-se
        </Button>
        <Button variant="outlined" sx={{ color: "556cd6" }}>
          Inscreva-se
        </Button>
        <Button>
          <DeleteIcon sx={{ color: "powderblue" }} />
        </Button>
        <StyledLink href="">Link 1</StyledLink>
        <StyledLink href="">Link 2</StyledLink>
        <StyledChip slot="Text1"></StyledChip>
        <FavButton handleClick={() => {}} />
      </Paper>
    </Box>
  );
}
