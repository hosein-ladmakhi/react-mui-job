import { FC } from "react";
import { Grid } from "@mui/material";
import SeoLayout from "@/layout/SeoLayout";
import { jobsPageSeoMeta } from "./page-metadatas";
import JobSearchForm from "./components/JobSearchForm";
import JobLists from "./components/JobLists";
import JobCategories from "./components/JobCategories";
import JobModalItem from "./components/JobModalItem";

const JobsPage: FC = () => {
  return (
    <SeoLayout {...jobsPageSeoMeta()}>
      <JobSearchForm />
      <Grid mt={2} container spacing={1}>
        <JobLists />
        <JobCategories />
      </Grid>
      <JobModalItem />
    </SeoLayout>
  );
};

export default JobsPage;
