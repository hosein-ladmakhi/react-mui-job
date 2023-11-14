import "./index.css";

import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../routes";
import { MuiThemeProvider, ReactQueryProvider } from "../providers";

const Root: FC = () => {
   return (
      <ReactQueryProvider>
         <MuiThemeProvider>
            <RouterProvider router={appRouter} />
         </MuiThemeProvider>
      </ReactQueryProvider>
   );
};

export default Root;
