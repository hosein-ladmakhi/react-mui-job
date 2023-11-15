import "./index.css";

import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../routes";
import { MuiThemeProvider, ReactQueryProvider } from "../providers";
import { AppContextProvider } from "../context";

const Root: FC = () => {
   return (
      <AppContextProvider>
         <ReactQueryProvider>
            <MuiThemeProvider>
               <RouterProvider router={appRouter} />
            </MuiThemeProvider>
         </ReactQueryProvider>
      </AppContextProvider>
   );
};

export default Root;
