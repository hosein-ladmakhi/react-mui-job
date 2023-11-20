import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Avatar } from "../kit";
import { useUserContext } from "../../hooks";

const DrawerUserInfo: FC = () => {
   const { user } = useUserContext();
   console.log(123465, user);
   return (
      <Box component="center">
         <Avatar apiSrc={user?.logo} height="70px" width="70px" />
         <Box mt={1}>
            <Typography variant="h4">
               {user?.firstName} {user?.lastName}
            </Typography>
            <Typography variant="body2">{user?.email}</Typography>
         </Box>
      </Box>
   );
};

export default DrawerUserInfo;
