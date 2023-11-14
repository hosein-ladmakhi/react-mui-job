import { FC } from "react";
import { Avatar as MuiAvatar } from "@mui/material";
import { prepareStaticServerURL } from "../../utils";

interface IAvatarProps {
   src?: string;
   apiSrc?: string;
   height: string;
   width: string;
   shape?: "circular" | "rounded" | "square";
}

const Avatar: FC<IAvatarProps> = ({ apiSrc, height, src, width, shape }) => {
   return (
      <MuiAvatar
         sx={{ height, width }}
         src={apiSrc ? prepareStaticServerURL(apiSrc) : src}
         variant={shape}
      />
   );
};

Avatar.defaultProps = {
   shape: "circular",
};

export default Avatar;
