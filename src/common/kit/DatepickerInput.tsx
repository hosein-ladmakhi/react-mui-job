import { FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { makeStyles } from "tss-react/mui";

interface IDatepickerInputProps {
   label: string;
   name: string;
   control: any;
}

const DatepickerInput: FC<IDatepickerInputProps> = ({
   label,
   name,
   control,
}) => {
   const { classes } = useStyles();
   return (
      <Controller
         name={name}
         control={control}
         render={({ field, fieldState }) => {
            const error = fieldState?.error?.message;
            return (
               <>
                  <DatePicker
                     {...field}
                     className={classes.root}
                     label={label}
                     slotProps={{ textField: { error: !!error } }}
                  />
                  <FormHelperText className={classes.error}>
                     {error}
                  </FormHelperText>
               </>
            );
         }}
      />
   );
};

export default DatepickerInput;

const useStyles = makeStyles()(() => ({
   root: {
      width: "100%",
   },
   error: {
      color: "red",
      textTransform: "capitalize",
   },
}));
