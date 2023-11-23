import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface IFlexBoxProps extends PropsWithChildren {
  justify?: "center" | "space-between" | "flex-start" | "flex-end" | "space-even";

  align?: "center" | "space-between" | "flex-start" | "flex-end" | "space-even";

  direction?: "row" | "column";
  className?: string;
}

const FlexBox: FC<IFlexBoxProps> = ({ direction, align, justify, children, className }) => {
  return (
    <Box display="flex" justifyContent={justify} alignItems={align} flexDirection={direction} className={className}>
      {children}
    </Box>
  );
};

FlexBox.defaultProps = {
  justify: "center",
  align: "center",
  direction: "row",
  className: "",
};

export default FlexBox;
