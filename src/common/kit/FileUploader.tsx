import React, { FC } from "react";
import { Avatar } from ".";
import { icons } from "../../constant/icons";
import { makeStyles } from "tss-react/mui";
import { APP_THEME_COLOR } from "../../constant";

interface IFileUploaderProps {
   file?: File;
   onChangeFile: (file?: File) => void;
   avatarHeight: string;
   avatarWidth: string;
}

const FileUploader: FC<IFileUploaderProps> = ({
   file,
   onChangeFile,
   avatarHeight,
   avatarWidth,
}) => {
   const { classes } = useStyles({ height: avatarHeight, width: avatarWidth });
   const avatarSrc = file ? URL.createObjectURL(file) : "";
   const onChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) =>
      onChangeFile(event?.currentTarget?.files?.[0]);

   return (
      <div className={classes.root}>
         <Avatar src={avatarSrc} height={avatarHeight} width={avatarWidth} />
         <div className={classes.uploader}>
            <input
               type="file"
               className={classes.inputFile}
               onChange={onChangeAvatar}
            />

            <icons.MuiPenIcon />
         </div>
      </div>
   );
};

export default FileUploader;

const useStyles = makeStyles<{ height: string; width: string }>()(
   (_, { height, width }) => ({
      root: {
         position: "relative",
         height,
         width,
      },
      uploader: {
         position: "absolute",
         top: 0,
         right: 0,
         height: "35px",
         width: "35px",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: APP_THEME_COLOR[700],
         borderRadius: "100%",
         cursor: "pointer",
      },
      inputFile: {
         position: "absolute",
         height: "100%",
         width: "100%",
         zIndex: 8888,
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         opacity: 0,
      },
   })
);
