import { FC } from "react";
import JobSearchForm from "../../components/jobs/JobSearchForm";
import JobLists from "../../components/jobs/JobLists";
import JobCategories from "../../components/jobs/JobCategories";
import { Grid } from "@mui/material";
import JobModalItem from "../../components/jobs/JobModalItem";

const JobsPage: FC = () => {
   return (
      <>
         <JobSearchForm />
         <Grid mt={2} container spacing={1}>
            <JobLists />
            <JobCategories />
         </Grid>
         <JobModalItem />
      </>
   );
};

export default JobsPage;
