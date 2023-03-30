import { StackProps } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

//Criamos uma interface estendendo as propriedades do Stack
interface ComponentProps extends StackProps {
  name: string;
  possibleTypes?: string[];
  onValueSet?(): void;
  label: string;
  helperText?: string;
  isDisabled?: boolean;
}

//Combinamos a nossa interface com os tipos do React Hook Form para o controller
type Props = ComponentProps & UseControllerProps;

const ScanWrapper: React.FC<Props> = ({ name, possibleTypes, onValueSet, isDisabled, label, helperText, control, ...other }) => {
  const {
    field: { onChange, value, ref },
    fieldState: { isDirty, invalid },
  } = useController({
    name: `${name}` as const,
    control,
    rules: { required: true },
  });

  return (
    <ScanComponent
      name={name}
      onValueSet={onValueSet}
      disabled={isDisabled}
      label={label}
      helperText={helperText}
      onScan={onChange}
      value={value?.value || ""}
      inputRef={ref}
      possibleTypes={possibleTypes}
      validateError={isDirty && invalid}
      {...other}
    />
  );
};

ScanWrapper.defaultProps = {
  isDisabled: false,
  onValueSet: undefined,
};

export default ScanWrapper;
