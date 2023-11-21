import { Grid } from "@mui/material";
import { FC } from "react";
import ResumesList from "../../components/resumes/ResumesList";
import EditResumeItem from "../../components/resumes/EditResumeItem";
import AddNewResume from "../../components/resumes/AddNewResume";
import AddNewSection from "../../components/resumes/AddNewSection";

const ResumePage: FC = () => {
   return (
      <Grid container spacing={2}>
         <Grid item md={9}>
            <EditResumeItem />
         </Grid>
         <Grid item md={3}>
            <ResumesList />
         </Grid>
         <AddNewResume />
         <AddNewSection />
      </Grid>
   );
};

export default ResumePage;
