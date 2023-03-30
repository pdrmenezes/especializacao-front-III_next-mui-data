import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectProps } from "@mui/material/Select";

interface SelectFieldProps extends SelectProps {
  options: SelectOption[];
}

interface SelectOption {
  label: string;
  value: string;
}

export const SelectField = (props: SelectFieldProps) => {
  return (
    <FormControl fullWidth size={props.size}>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select {...props}>
        {props.options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
