import "./index.css";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../routes";

const Root: FC = () => {
   return <RouterProvider router={appRouter} />;
};

export default Root;
