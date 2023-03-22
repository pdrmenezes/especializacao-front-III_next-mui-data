import { Slider } from "@mui/material";

const SxProp = () => {
  return (
    <Slider
      defaultValue={30}
      sx={{
        width: 300,
        color: "success.main",
      }}
    />
  );
};

export default SxProp;
