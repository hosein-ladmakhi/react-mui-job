import { MuiChipsInput } from "mui-chips-input";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface IChipInputLabel {
  name: string;
  label: string;
  control: any;
  placeholder: string;
}

const ChipInput: FC<IChipInputLabel> = ({ label, name, control, placeholder }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <MuiChipsInput placeholder={placeholder} {...field} name={name} label={label} fullWidth disableEdition />
      )}
    />
  );
};

export default ChipInput;
