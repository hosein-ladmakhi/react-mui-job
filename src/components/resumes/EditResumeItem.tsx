import { Box, Typography, Collapse, IconButton } from "@mui/material";
import React, { FC, useState } from "react";
import { APP_THEME_COLOR } from "../../constant";
import { makeStyles } from "tss-react/mui";
import CreatePersonalDetailForm from "./resumesSectionItem/CreatePersonalDetailForm";
import CreateProfileForm from "./resumesSectionItem/CreateProfileForm";
import CreateProfessionalExpreinceForm from "./resumesSectionItem/CreateProfessionalExprienceForm";
import CreateSkillForm from "./resumesSectionItem/CreateSkillForm";
import { FlexBox } from "../../common/kit";
import { icons } from "../../constant/icons";
import ResumeItemHeader from "./ResumeItemHeader";
import {
   useAddDataResumeItem,
   useResumeById,
   useStateQuery,
} from "../../hooks";
import { EResumeItemType } from "../../types/apis/resume";

const RESUME_ITEM = {
   [EResumeItemType.PersonalDetail]: CreatePersonalDetailForm,
   [EResumeItemType.ProfessionalExprience]: CreateProfessionalExpreinceForm,
   [EResumeItemType.Profile]: CreateProfileForm,
   [EResumeItemType.Skill]: CreateSkillForm,
};

const EditResumeItem: FC = () => {
   const { classes } = useStyles();
   const stateQuery = useStateQuery();
   const resumeId = stateQuery.get("resume");
   const [activeSection, setActiveSection] = useState<number>();
   const { data: resume } = useResumeById(+resumeId!);
   const {
      isLoading: addDataResumeItemLoading,
      mutateAsync: mutateAddDataResumeItem,
   } = useAddDataResumeItem();

   const handleOnChangeSection = (id: number) =>
      setActiveSection((prevActiveSection) =>
         prevActiveSection === id ? undefined : id
      );

   if (!resume) return <></>;

   return (
      <>
         <ResumeItemHeader resume={resume} />
         {React.Children.toArray(
            resume?.resumeItems?.map(({ id, data, resume, type }) => {
               const Section = RESUME_ITEM?.[type];
               return (
                  <Box className={classes.root}>
                     <FlexBox justify="space-between">
                        <Typography variant="h3">{type}</Typography>
                        <IconButton
                           onClick={handleOnChangeSection.bind(null, id)}
                        >
                           {id === activeSection ? (
                              <icons.MuiExpandLess />
                           ) : (
                              <icons.MuiExpandMore />
                           )}
                        </IconButton>
                     </FlexBox>
                     <Collapse in={id === activeSection}>
                        <Section
                           resume={resume}
                           data={data}
                           formClass={classes.form}
                           mutateAddDataResumeItem={mutateAddDataResumeItem}
                           addDataResumeItemLoading={addDataResumeItemLoading}
                           id={id}
                        />
                     </Collapse>
                  </Box>
               );
            })
         )}
      </>
   );
};

export default EditResumeItem;

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
