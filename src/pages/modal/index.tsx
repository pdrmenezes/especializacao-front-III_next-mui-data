import {
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const Modal = () => {
  const [stack, setStack] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStack(event.target.value);
  };

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

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stack</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={stack} label="Stack" onChange={handleChange}>
            <MenuItem value={10}>Front-end</MenuItem>
            <MenuItem value={20}>Back-end</MenuItem>
            <MenuItem value={30}>Full-stack</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Feminino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </RadioGroup>
        </FormControl>

        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Desejo receber diariamente" />
        </FormGroup>

        <Button variant="contained" sx={{ width: 1 }}>
          Inscreva-se
        </Button>
      </Paper>
    </Box>
  );
};
