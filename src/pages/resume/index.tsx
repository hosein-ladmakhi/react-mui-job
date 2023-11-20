import { Grid } from "@mui/material";
import { FC } from "react";
import ResumesList from "../../components/resumes/ResumesList";
import AddOrEditResumeItem from "../../components/resumes/AddOrEditResumeItem";

const ResumePage: FC = () => {
   return (
      <Grid container spacing={2}>
         <AddOrEditResumeItem />
         <ResumesList />
      </Grid>
   );
};

export default ResumePage;
