import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../routes";
import { ReactQueryProvider } from "../providers";

const Root: FC = () => {
   return (
      <ReactQueryProvider>
         <RouterProvider router={appRouter} />
      </ReactQueryProvider>
   );
};

export default Root;
