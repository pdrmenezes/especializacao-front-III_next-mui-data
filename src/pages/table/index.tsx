import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Iogurte gelado", 159, 6.0, 24, 4.0),
  createData("Sorvete", 237, 9.0, 37, 4.3),
  createData("Geleia de chocolate", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Pão de gengibre", 356, 16.0, 49, 3.9),
];

const products = [
  {
    name: "rice",
    calories: 123,
    fat: 478,
    carbs: 147,
    protein: 12,
  },
  {
    name: "pudding",
    calories: 23,
    fat: 47,
    carbs: 7,
    protein: 1,
  },
];

type Product = {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

type TableProps = {
  products: Product[];
};

export default function Table({ products }: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sobremesa</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} data-testid="table-row">
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
