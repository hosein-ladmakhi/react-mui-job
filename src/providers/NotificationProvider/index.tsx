import { FC, PropsWithChildren } from "react";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ToastContainer transition={Flip} draggable />
      {children}
    </>
  );
};

export default NotificationProvider;
