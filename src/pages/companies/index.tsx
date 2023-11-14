import React, { FC } from "react";
import { useCompany } from "../../hooks";
import { Grid } from "@mui/material";
import CompanyListItem from "../../components/companies/CompanyListItem";

const CompaniesPage: FC = () => {
   const { data } = useCompany();
   return (
      <div>
         <Grid container spacing={2}>
            {React.Children.toArray(
               data?.map((company) => <CompanyListItem company={company} />)
            )}
         </Grid>
      </div>
   );
};

export default CompaniesPage;
