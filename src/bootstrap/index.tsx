import { Outlet } from "react-router-dom";
import { AppContextProvider, UserContextProvider } from "@/context";
import { MuiDatePickerProvider, MuiThemeProvider, NotificationProvider, ReactQueryProvider } from "@/providers";

const BootstrapApplication = () => {
  return (
    <ReactQueryProvider>
      <MuiThemeProvider>
        <AppContextProvider>
          <UserContextProvider>
            <MuiDatePickerProvider>
              <NotificationProvider>
                <Outlet />
              </NotificationProvider>
            </MuiDatePickerProvider>
          </UserContextProvider>
        </AppContextProvider>
      </MuiThemeProvider>
    </ReactQueryProvider>
  );
};

export default BootstrapApplication;
