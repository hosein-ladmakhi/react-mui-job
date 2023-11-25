import { FC } from "react";
import { Grid } from "@mui/material";

// Seo

import SeoLayout from "@/layout/SeoLayout";
import { resumePageSeoMetadata } from "./page-metadatas";

// Context
import { ResumeContextProvider } from "./context/ResumeContext";

// Components
import SelectedResumeDetail from "./components/SelectedResumeDetail";
import ResumesList from "./components/ResumesList";
import ModifyResumeModal from "./components/ModifyResumeModal";
import CreateSectionModal from "./components/CreateSectionModal";

const ResumePage: FC = () => {
  return (
    <SeoLayout {...resumePageSeoMetadata()}>
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
    </SeoLayout>
  );
};

export default ResumePage;
