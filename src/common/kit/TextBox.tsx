import { FC } from "react";
import { FormHelperText, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TControllerForm } from "../../types/general";
import { makeStyles } from "tss-react/mui";

interface ITextBoxProps {
  label: string;
  type?: "text" | "password" | "email" | "number" | "textarea";
  textRows?: number;
  control?: any;
  name: string;
}

const TextBox: FC<ITextBoxProps> = ({ label, type, textRows, control, name }) => {
  const { classes } = useStyles();

  const print = ({ field, fieldState }: TControllerForm) => {
    const error = fieldState?.error?.message;
    return (
      <>
        <TextField
          {...field}
          multiline={type === "textarea"}
          rows={textRows}
          type={type}
          label={label}
          fullWidth
          error={!!error}
        />
        <FormHelperText className={classes.error}>{error}</FormHelperText>
      </>
    );
  };

  return control ? <Controller name={name} control={control} render={print} /> : print({});
};

TextBox.defaultProps = {
  type: "text",
  textRows: 1,
};

export default TextBox;

const useStyles = makeStyles()(() => ({
  error: {
    color: "red",
    textTransform: "capitalize",
  },
}));
