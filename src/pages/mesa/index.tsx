"use client";
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
  Modal,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// ID, Nome, Sobrenome, Email, Stack, Gênero e Data de inscrição dos usuários

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""}${params.row.lastName || ""}@gmail.com`,
  },
  {
    field: "stack",
    headerName: "Stack",
    width: 130,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 130,
  },
  {
    field: "inscriptionDate",
    headerName: "Inscription Date",
    width: 130,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, stack: "Front-end", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, stack: "Back-end", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, stack: "Back-end", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, stack: "Front-end", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, stack: "Front-end", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, stack: "Full-stack", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, stack: "Full-stack", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, stack: "Front-end", gender: "Neutral", inscriptionDate: "22/03/2023" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, stack: "Full-stack", gender: "Neutral", inscriptionDate: "22/03/2023" },
];

export default function Mesa() {
  const [stack, setStack] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setStack(event.target.value);
  };
  return (
    <>
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
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </Box>
          </Modal>

          <Button variant="contained" sx={{ width: 1 }}>
            Inscreva-se
          </Button>
        </Paper>
      </Box>
    </>
  );
}
