import React, { FC, PropsWithChildren } from "react";
import { Button as MuiButton } from "@mui/material";
import { Loading } from ".";
import { SvgIconComponent } from "@mui/icons-material";
import { makeStyles } from "tss-react/mui";

interface IButtonProps extends PropsWithChildren {
  onClick?: (event: React.MouseEvent) => void;
  size?: "small" | "large" | "medium";
  loading?: boolean;
  Icon?: SvgIconComponent;
  isSubmit?: boolean;
  className?: string;
  color?: "primary" | "error" | "info";
}

const Button: FC<IButtonProps> = ({ children, onClick, size, loading, Icon, isSubmit, className, color }) => {
  const { classes, cx } = useStyles();

  return (
    <MuiButton
      color={color}
      type={isSubmit ? "submit" : "button"}
      variant="contained"
      onClick={onClick}
      fullWidth
      size={size}
      className={cx(className)}
    >
      {loading ? (
        <Loading variant="circle" />
      ) : (
        <>
          {Icon && <Icon className={classes.icon} />}
          {children}
        </>
      )}
    </MuiButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  size: "medium",
  loading: false,
  className: "",
  color: "primary",
};

export default Button;

const useStyles = makeStyles()(() => ({
  icon: {
    marginRight: "5px",
  },
}));
