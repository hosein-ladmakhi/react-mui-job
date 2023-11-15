import React, { FC } from "react";
import { useCompany } from "../../hooks";
import { Grid } from "@mui/material";
import CompanyListItem from "../../components/companies/CompanyListItem";
import CompanyDetailModal from "../../components/companies/CompanyDetailModal";

const CompaniesPage: FC = () => {
   const { data } = useCompany();
   return (
      <div>
         <Grid container spacing={2}>
            {React.Children.toArray(
               data?.map((company) => <CompanyListItem company={company} />)
            )}
         </Grid>
         <CompanyDetailModal />
      </div>
   );
};

export default CompaniesPage;
