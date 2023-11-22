import { FC } from "react";
import { Grid } from "@mui/material";
import ResumesList from "@components/resumes/ResumesList";
import SelectedResumeDetail from "@components/resumes/SelectedResumeDetail";
import ModifyResumeModal from "@components/resumes/ModifyResumeModal";
import CreateSectionModal from "@components/resumes/CreateSectionModal";
import { ResumeContextProvider } from "@/context";

const ResumePage: FC = () => {
  return (
    <ResumeContextProvider>
      <Grid container spacing={2}>
        <Grid item md={9}>
          <SelectedResumeDetail />
        </Grid>
        <Grid item md={3}>
          <ResumesList />
        </Grid>
        <ModifyResumeModal />
        <CreateSectionModal />
      </Grid>
    </ResumeContextProvider>
  );
};

export default ResumePage;
