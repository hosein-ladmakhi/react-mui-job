import { SvgIconComponent } from "@mui/icons-material";

export type TNavbar = {
   path: string;
   text: string;
   Icon: SvgIconComponent;
   disabled?: boolean;
};

export type TNavbars = TNavbar[];
