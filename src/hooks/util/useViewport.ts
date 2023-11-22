import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const useViewport = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.only("sm"));
   const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
   const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

   return { isDesktop, isMobile, isTablet };
};
