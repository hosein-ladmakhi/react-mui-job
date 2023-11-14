import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { APP_THEME_COLOR } from "../constant";

interface IMuiThemeProviderProps extends PropsWithChildren {}

const theme = createTheme({
   palette: {
      mode: "dark",
   },
   components: {
      MuiAvatar: {
         styleOverrides: {
            img: {
               objectFit: "cover",
               objectPosition: "center",
            },
         },
      },
      MuiCard: {
         styleOverrides: {
            root: {
               padding: "20px",
            },
         },
      },
      MuiDrawer: {
         styleOverrides: {
            paper: {
               width: "200px",
               padding: "10px",
               background: APP_THEME_COLOR["900"],
               color: APP_THEME_COLOR["100"],
            },
         },
      },
      MuiSvgIcon: {
         styleOverrides: {
            root: {
               color: "white",
            },
         },
      },
   },
   typography: {
      h1: { fontSize: "30px", fontWeight: "bold" },
      h2: { fontSize: "25px", fontWeight: "bold" },
      h3: { fontSize: "20px", fontWeight: "bold" },
      h4: { fontSize: "16px", fontWeight: "bold" },
      h5: { fontSize: "14px", fontWeight: "bold" },
      h6: { fontSize: "12px", fontWeight: "bold" },
      body1: { fontSize: "16px" },
      body2: { fontSize: "14px" },
   },
});

export const MuiThemeProvider: FC<IMuiThemeProviderProps> = ({ children }) => {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
};
