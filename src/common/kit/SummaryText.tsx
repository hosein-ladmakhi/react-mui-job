import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { makeStyles } from "tss-react/mui";

interface ISummaryText {
  summary?: string;
  children?: ReactNode;
  lineClamp?: number;
  className?: string;
}

const SummaryText: FC<ISummaryText> = ({ summary, children, lineClamp, className }) => {
  const { classes, cx } = useStyles({ lineClamp });
  return (
    <Typography className={cx(classes.root, className!)} variant="caption">
      {summary && summary}
      {!summary && children}
    </Typography>
  );
};

export default SummaryText;

SummaryText.defaultProps = {
  lineClamp: 1,
  className: "",
};

const useStyles = makeStyles<{ lineClamp?: number }>()((_, { lineClamp }) => ({
  root: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    lineClamp: lineClamp,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lineClamp,
  },
}));
