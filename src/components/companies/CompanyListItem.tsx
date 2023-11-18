import { Grid, Card, Typography, IconButton } from "@mui/material";
import { FC } from "react";
import { Avatar, FlexBox } from "../../common/kit";
import { icons } from "../../constant/icons";
import { TCompany } from "../../types/apis/company";
import { APP_THEME_COLOR } from "../../constant";
import { useAppContext } from "../../hooks";
import { COMPANY_DETAIL_SUBJECT } from "../../constant/modalSubjects";
import { makeStyles } from "tss-react/mui";

interface ICompanyListItemProps {
   company: TCompany;
}

const CompanyListItem: FC<ICompanyListItemProps> = ({ company }) => {
   const { handleOpenModal } = useAppContext();
   const { classes } = useStyles();
   const onOpenDetail = () => {
      handleOpenModal(company, COMPANY_DETAIL_SUBJECT);
   };

   return (
      <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>
            <Avatar height="70px" width="70px" apiSrc={company.logo} />
            <FlexBox className={classes.content} justify="space-between">
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
      </Grid>
   );
};

export default CompanyListItem;

const useStyles = makeStyles()(() => ({
   content: {
      marginLeft: "10px",
      width: "100%",
   },
   card: {
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
   },
}));
