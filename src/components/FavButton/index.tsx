import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";
import React from "react";

type Props = { handleClick: () => void };

const FavButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <StarIcon color="secondary" />
    </IconButton>
  );
};

export default FavButton;
