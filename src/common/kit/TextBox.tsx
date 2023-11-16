import { FC } from "react";
import { TextField } from "@mui/material";

interface ITextBoxProps {
   label: string;
}

const TextBox: FC<ITextBoxProps> = ({ label }) => {
   return <TextField label={label} fullWidth />;
};

export default TextBox;
