import {
   ControllerRenderProps,
   FieldValues,
   ControllerFieldState,
   UseFormStateReturn,
} from "react-hook-form";

export type TObject = { [key: string]: any };

export type TControllerForm = Partial<{
   field: ControllerRenderProps<FieldValues, string>;
   fieldState: ControllerFieldState;
   formState: UseFormStateReturn<FieldValues>;
}>;
