import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { FC } from "react";

interface ISelectBoxProps {
  label: string;
  defaultLabelOption: string;
  options: { value: any; text: string }[];
}

const SelectBox: FC<ISelectBoxProps> = ({ defaultLabelOption, label, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label}>
        <MenuItem value="" disabled>
          {defaultLabelOption}
        </MenuItem>
        {React.Children.toArray(options.map((option) => <MenuItem value={option.value}>{option.text}</MenuItem>))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
