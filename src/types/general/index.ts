import { ControllerRenderProps, FieldValues, ControllerFieldState, UseFormStateReturn } from "react-hook-form";
import { SvgIconComponent } from "@mui/icons-material";

export type TObject = { [key: string]: any };

export type TControllerForm = Partial<{
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}>;

export type TUser = {
  username: string;
  password: string;
  email: string;
  bio?: string;
  age: number;
  firstName: string;
  lastName: string;
  logo?: string;
};

export type TJwtToken = { id: number; exp: number };

export type TNavbar = {
  path: string;
  text: string;
  Icon: SvgIconComponent;
  disabled?: boolean;
};

export type TNavbars = TNavbar[];
