import { IconButton, Modal as MuiModal, styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useAppContext } from "../../hooks";
import { icons } from "../../constant/icons";
import { APP_THEME_COLOR } from "../../constant";
import { preventParentEvent } from "../../utils";
import { makeStyles } from "tss-react/mui";

interface IModalProps extends PropsWithChildren {
   subject?: string;
   size?: "sm" | "md" | "lg";
}

const Modal: FC<IModalProps> = ({ subject, size, children }) => {
   const { classes, cx } = useStyles();
   const { handleModalStatus, modalSubject, isOpenModal } = useAppContext();
   const handleOnClose = () => handleModalStatus(false);

   const isVisible = !!isOpenModal && modalSubject === subject;
   const cardClass = size
      ? cx(classes.card, classes?.[`card-${size}`])
      : classes.card;

   return (
      <MuiModal open={isVisible} onClose={handleOnClose}>
         <div className={classes.content} onClick={handleOnClose}>
            <div className={cardClass} onClick={preventParentEvent}>
               <div className={classes.closeIcon}>
                  <IconButton onClick={handleOnClose}>
                     <icons.MuiCloseIcon className={classes.icon} />
                  </IconButton>
               </div>
               {children}
            </div>
         </div>
      </MuiModal>
   );
};

Modal.defaultProps = {
   size: "md",
};

export default Modal;

const useStyles = makeStyles()((theme) => ({
   content: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   "card-sm": {
      width: "400px",
   },
   "card-md": {
      width: "600px",
   },
   "card-lg": {
      width: "800px",
   },
   card: {
      padding: "30px",
      backgroundColor: APP_THEME_COLOR[900],
      color: theme.palette.common.white,
      position: "relative",
      borderRadius: "5px",
      overflow: "hidden",
      wordBreak: "break-word",
      [theme.breakpoints.down("md")]: {
         maxHeight: "600px",
         maxWidth: "450px",
         overflowY: "auto",
      },
      [theme.breakpoints.down("sm")]: {
         maxWidth: "350px",
      },
   },
   icon: {
      fill: APP_THEME_COLOR[200],
   },
   closeIcon: {
      position: "absolute",
      top: "2px",
      right: "2px",
   },
}));
