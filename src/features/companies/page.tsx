import React, { FC } from "react";
import { Grid } from "@mui/material";
import SeoLayout from "@/layout/SeoLayout";
import { companiesPageSeoMeta } from "./page-metadatas";
import CompanyListItem from "./components/CompanyListItem";
import CompanyDetailModal from "./components/CompanyDetailModal";
import { useCompany } from "./hooks/useCompany";

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
