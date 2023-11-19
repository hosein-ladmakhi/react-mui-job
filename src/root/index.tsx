import "./index.css";

import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../routes";
import { MuiThemeProvider, ReactQueryProvider } from "../providers";
import { AppContextProvider, UserContextProvider } from "../context";

const Root: FC = () => {
   return (
      <AppContextProvider>
         <UserContextProvider>
            <ReactQueryProvider>
               <MuiThemeProvider>
                  <RouterProvider router={appRouter} />
               </MuiThemeProvider>
            </ReactQueryProvider>
         </UserContextProvider>
      </AppContextProvider>
   );
};

export default Root;
