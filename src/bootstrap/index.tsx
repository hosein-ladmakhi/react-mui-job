import { Outlet } from "react-router-dom";
import { AppContextProvider, UserContextProvider } from "../context";
import { MuiThemeProvider, ReactQueryProvider } from "../providers";

const BootstrapApplication = () => {
   return (
      <ReactQueryProvider>
         <MuiThemeProvider>
            <AppContextProvider>
               <UserContextProvider>
                  <Outlet />
               </UserContextProvider>
            </AppContextProvider>
         </MuiThemeProvider>
      </ReactQueryProvider>
   );
};

export default BootstrapApplication;
