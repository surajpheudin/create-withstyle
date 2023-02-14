import { FC } from "react";
import { ButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

const Button: FC<ButtonProps> = (props) => {
    return <MuiButton {...props}></MuiButton>;
};

export default Button;
