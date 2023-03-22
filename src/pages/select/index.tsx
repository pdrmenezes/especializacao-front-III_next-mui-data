import { FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useState } from "react";

export default function SelectPage() {
  const [country, setCountry] = useState("");
  const [countriesList, setCountriesList] = useState<string[] | []>([]);

  return (
    <Paper>
      <h1>{country}</h1>
      <FormControl>
        <InputLabel id="country">Country</InputLabel>
        <Select
          data-testid="country"
          labelId="country"
          onChange={({ target: { value } }) => {
            setCountry(value);
            setCountriesList([...countriesList, value]);
          }}
          value={country}
          style={{ minWidth: 120 }}
        >
          <MenuItem value="brasil">Brasil</MenuItem>
          <MenuItem value="argentina">Argentina</MenuItem>
          <MenuItem value="usa">United States</MenuItem>
        </Select>
      </FormControl>
      <div>
        <b>Countries List</b>
        <ul>
          {countriesList.map((country) => (
            <li key={`${country}-${Date.now()}`}>{country}</li>
          ))}
        </ul>
      </div>
    </Paper>
  );
}
