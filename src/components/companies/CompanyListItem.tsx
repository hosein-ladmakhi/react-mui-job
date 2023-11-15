import { Grid, Card, Typography, IconButton, styled } from "@mui/material";
import { FC } from "react";
import { Avatar, FlexBox } from "../../common/kit";
import { icons } from "../../constant/icons";
import { TCompany } from "../../types/apis/company";
import { APP_THEME_COLOR } from "../../constant";
import { useAppContext } from "../../hooks";
import { COMPANY_DETAIL_SUBJECT } from "../../constant/modalSubjects";

interface ICompanyListItemProps {
   company: TCompany;
}

const CompanyListItem: FC<ICompanyListItemProps> = ({ company }) => {
   const { handleOpenModal } = useAppContext();
   const onOpenDetail = () => {
      handleOpenModal(company, COMPANY_DETAIL_SUBJECT);
   };

   return (
      <Container item xs={12} sm={6} md={4}>
         <Card className="card">
            <Avatar height="70px" width="70px" apiSrc={company.logo} />
            <FlexBox className="content" justify="space-between">
               <div>
                  <Typography variant="h4">{company.name}</Typography>
                  <Typography
                     color={APP_THEME_COLOR["400"]}
                     mt={0.4}
                     variant="body1"
                  >
                     {company.websiteURL}
                  </Typography>
               </div>
               <IconButton onClick={onOpenDetail}>
                  <icons.MuiEyeIcon />
               </IconButton>
            </FlexBox>
         </Card>
      </Container>
   );
};

export default CompanyListItem;

const Container = styled(Grid)(() => ({
   ".content": {
      marginLeft: "10px",
      width: "100%",
   },
   ".card": {
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
   },
}));
