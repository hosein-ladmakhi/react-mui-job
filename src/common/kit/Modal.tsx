import { IconButton, Modal as MuiModal, styled } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useAppContext } from "../../hooks";
import { icons } from "../../constant/icons";
import { APP_THEME_COLOR } from "../../constant";
import { preventParentEvent } from "../../utils";

interface IModalProps extends PropsWithChildren {
   subject?: string;
   size?: "sm" | "md" | "lg";
}

const Modal: FC<IModalProps> = ({ subject, size, children }) => {
   const { handleModalStatus, modalSubject, isOpenModal } = useAppContext();
   const handleOnClose = () => handleModalStatus(false);

   const isVisible = !!isOpenModal && modalSubject === subject;
   const cardClass = `card card-${size}`;

   return (
      <Container open={isVisible} onClose={handleOnClose}>
         <div className="content" onClick={handleOnClose}>
            <div className={cardClass} onClick={preventParentEvent}>
               <div className="close-icon">
                  <IconButton onClick={handleOnClose}>
                     <icons.MuiCloseIcon className="icon" />
                  </IconButton>
               </div>
               {children}
            </div>
         </div>
      </Container>
   );
};

Modal.defaultProps = {
   size: "md",
};

const Container = styled(MuiModal)(({ theme }) => ({
   ".content": {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },

   ".close-icon": {
      position: "absolute",
      top: "2px",
      right: "2px",
   },

   ".icon": {
      fill: APP_THEME_COLOR[200],
   },

   ".card": {
      padding: "30px",
      backgroundColor: APP_THEME_COLOR[900],
      color: theme.palette.common.white,
      position: "relative",
      borderRadius: "5px",
      overflow: "hidden",
      wordBreak: "break-word",
      "&-sm": {
         width: "400px",
      },
      "&-md": {
         width: "600px",
      },
      "&-lg": {
         width: "800px",
      },

      [theme.breakpoints.down("md")]: {
         maxWidth: "450px",
      },
      [theme.breakpoints.down("sm")]: {
         maxWidth: "350px",
      },
   },
}));

export default Modal;
