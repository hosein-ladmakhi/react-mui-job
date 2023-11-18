import { FC } from "react";
import { TextField } from "@mui/material";

interface ITextBoxProps {
   label: string;
   type?: "text" | "password" | "email" | "number" | "textarea";
   textRows?: number;
}

const TextBox: FC<ITextBoxProps> = ({ label, type, textRows }) => {
   return (
      <TextField
         multiline={type === "textarea"}
         rows={textRows}
         type={type}
         label={label}
         fullWidth
      />
   );
};

TextBox.defaultProps = {
   type: "text",
   textRows: 1,
};

export default TextBox;
