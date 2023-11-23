import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { FC, PropsWithChildren } from "react";

export const MuiDatePickerProvider: FC<PropsWithChildren> = ({ children }) => {
  return <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>;
};

export default MuiDatePickerProvider;
