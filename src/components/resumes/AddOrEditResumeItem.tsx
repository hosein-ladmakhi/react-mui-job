import {
   Grid,
   Box,
   Typography,
   Collapse,
   IconButton,
   Button,
} from "@mui/material";
import React, { FC, useState } from "react";
import { APP_THEME_COLOR } from "../../constant";
import { makeStyles } from "tss-react/mui";
import CreatePersonalDetailForm from "./CreatePersonalDetailForm";
import CreateProfileForm from "./CreateProfileForm";
import CreateProfessionalExpreinceForm from "./CreateProfessionalExprienceForm";
import CreateSkillForm from "./CreateSkillForm";
import { FlexBox } from "../../common/kit";
import { icons } from "../../constant/icons";

const AddOrEditResumeItem: FC = () => {
   const { classes } = useStyles();
   const [activeSection, setActiveSection] = useState<number>();

   const sections = [
      {
         id: 1,
         section: <CreatePersonalDetailForm formClass={classes.form} />,
         text: "Create Personal Detail",
      },
      {
         id: 2,
         section: <CreateProfileForm formClass={classes.form} />,
         text: "Create Profile",
      },
      {
         id: 3,
         section: <CreateProfessionalExpreinceForm formClass={classes.form} />,
         text: "Create Professional Exprience",
      },
      {
         id: 4,
         section: <CreateSkillForm formClass={classes.form} />,
         text: "Create Skill",
      },
   ];

   const handleOnChangeSection = (id: number) =>
      setActiveSection((prevActiveSection) =>
         prevActiveSection === id ? undefined : id
      );

   return (
      <Grid item md={9}>
         <FlexBox justify="space-between" className={classes.root}>
            <Typography variant="h3">The Resume Name</Typography>
            <Button variant="contained">Add New Section</Button>
         </FlexBox>
         {React.Children.toArray(
            sections.map(({ id, section, text }) => (
               <Box className={classes.root}>
                  <FlexBox justify="space-between">
                     <Typography variant="h3">{text}</Typography>
                     <IconButton onClick={handleOnChangeSection.bind(null, id)}>
                        {id === activeSection ? (
                           <icons.MuiExpandLess />
                        ) : (
                           <icons.MuiExpandMore />
                        )}
                     </IconButton>
                  </FlexBox>
                  <Collapse in={id === activeSection}>{section}</Collapse>
               </Box>
            ))
         )}
      </Grid>
   );
};

export default AddOrEditResumeItem;

const useStyles = makeStyles()(() => ({
   root: {
      background: APP_THEME_COLOR[900],
      padding: "20px",
      borderRadius: "4px",
      marginBottom: "20px",
   },
   personalDetailForm: {
      marginTop: "20px",
   },
   profileForm: {
      marginTop: "20px",
   },
   personalExpirenceForm: {
      marginTop: "20px",
   },
   skillForm: {
      marginTop: "20px",
   },
   form: {
      marginTop: "20px",
   },
}));
