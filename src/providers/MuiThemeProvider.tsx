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
      MuiButton: {
         styleOverrides: {
            contained: {
               textTransform: "capitalize",
            },
            containedPrimary: {
               background: APP_THEME_COLOR[800],
               color: APP_THEME_COLOR[100],
            },
         },
      },
      MuiCollapse: {
         styleOverrides: {
            root: {
               background: APP_THEME_COLOR[900],
               borderRadius: "5px",
            },
         },
      },
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
               padding: "10px",
               background: APP_THEME_COLOR["900"],
               color: APP_THEME_COLOR["100"],
               position: "relative",
               maxWidth: "400px",
            },
            root: {
               height: "100%",
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
      caption: {
         display: "block",
         color: APP_THEME_COLOR[400],
      },
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
