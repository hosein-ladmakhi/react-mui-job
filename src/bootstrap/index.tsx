import { Outlet } from "react-router-dom";
import { AppContextProvider, UserContextProvider } from "../context";
import {
   MuiDatePickerProvider,
   MuiThemeProvider,
   ReactQueryProvider,
} from "../providers";

const BootstrapApplication = () => {
   return (
      <ReactQueryProvider>
         <MuiThemeProvider>
            <AppContextProvider>
               <UserContextProvider>
                  <MuiDatePickerProvider>
                     <Outlet />
                  </MuiDatePickerProvider>
               </UserContextProvider>
            </AppContextProvider>
         </MuiThemeProvider>
      </ReactQueryProvider>
   );
};

export default BootstrapApplication;
