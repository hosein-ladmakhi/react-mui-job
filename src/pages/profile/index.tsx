import { FC, useState } from "react";
import { FileUploader, TextBox } from "../../common/kit";
import { Button, Grid } from "@mui/material";
import { useViewport } from "../../hooks";

const ProfilePage: FC = () => {
   const [img, setImg] = useState<File>();
   const { isDesktop } = useViewport();

   return (
      <form>
         <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
               {isDesktop ? (
                  <FileUploader
                     avatarHeight="120px"
                     avatarWidth="120px"
                     file={img}
                     onChangeFile={(file) => setImg(file)}
                  />
               ) : (
                  <center>
                     <FileUploader
                        avatarHeight="120px"
                        avatarWidth="120px"
                        file={img}
                        onChangeFile={(file) => setImg(file)}
                     />
                  </center>
               )}
            </Grid>
            <Grid item xs={12} lg={6}>
               <TextBox label="Username" type="text" />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TextBox label="Email Address" type="text" />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TextBox label="First Name" type="text" />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TextBox label="Last Name" type="text" />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TextBox label="Age" type="number" />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TextBox label="Password" type="password" />
            </Grid>
            <Grid item xs={12} lg={12}>
               <TextBox label="Your Bio" type="textarea" textRows={10} />
            </Grid>
            <Grid item lg={1}>
               <Button variant="contained" fullWidth>
                  Save Change
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default ProfilePage;
