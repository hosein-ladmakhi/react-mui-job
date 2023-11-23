import React, { FC } from "react";
import { useCompany } from "@/hooks";
import { Grid } from "@mui/material";
import SeoLayout from "@/layout/SeoLayout";
import { companiesPageSeoMeta } from "./metadata";
import CompanyListItem from "./components/CompanyListItem";
import CompanyDetailModal from "./components/CompanyDetailModal";

const CompaniesPage: FC = () => {
  const { data } = useCompany();
  return (
    <SeoLayout {...companiesPageSeoMeta()}>
      <Grid container spacing={2}>
        {React.Children.toArray(data?.map((company) => <CompanyListItem company={company} />))}
      </Grid>
      <CompanyDetailModal />
    </SeoLayout>
  );
};

export default CompaniesPage;
