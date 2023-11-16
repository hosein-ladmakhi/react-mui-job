import { CircularProgress, LinearProgress } from "@mui/material";
import { FC } from "react";

interface ILoadingProps {
   variant: "circle" | "linear";
}

const loadingVariant = new Map([
   ["circle", <CircularProgress />],
   ["linear", <LinearProgress />],
]);

const Loading: FC<ILoadingProps> = ({ variant }) => {
   return loadingVariant.get(variant);
};

export default Loading;
