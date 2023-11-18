import React, { FC } from "react";
import { useCompany } from "../../hooks";
import { Grid } from "@mui/material";
import CompanyListItem from "../../components/companies/CompanyListItem";
import CompanyDetailModal from "../../components/companies/CompanyDetailModal";
import SeoLayout from "../../layout/SeoLayout";
import { companiesPageSeoMeta } from "../../seo-meta";

const CompaniesPage: FC = () => {
   const { data } = useCompany();
   return (
      <SeoLayout {...companiesPageSeoMeta()}>
         <Grid container spacing={2}>
            {React.Children.toArray(
               data?.map((company) => <CompanyListItem company={company} />)
            )}
         </Grid>
         <CompanyDetailModal />
      </SeoLayout>
   );
};

export default CompaniesPage;
