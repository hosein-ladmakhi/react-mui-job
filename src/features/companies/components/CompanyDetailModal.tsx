import { FC } from "react";
import { Avatar, FlexBox, Modal } from "@/common/kit";
import { Box, Typography } from "@mui/material";
import { numberFormat } from "@/utils";
import { icons } from "@/constant/icons";
import { COMPANY_DETAIL_SUBJECT } from "@/constant/modalSubjects";
import { useAppContext } from "@/context";
import { TCompany } from "../types";

const CompanyDetailModal: FC = () => {
  const { modalContent: company } = useAppContext<TCompany>();

  if (!company) return <></>;
  return (
    <Modal subject={COMPANY_DETAIL_SUBJECT}>
      <FlexBox justify="flex-start" align="center">
        <Avatar apiSrc={company.logo} height="80px" width="80px" />
        <Box ml={2}>
          <Typography variant="h4">{company.name}</Typography>
          <FlexBox align="center" justify="flex-start">
            <icons.MuiLinkIcon fontSize="small" />
            <Typography ml={0.5} variant="caption">
              {company.websiteURL}
            </Typography>
          </FlexBox>
          <FlexBox align="center" justify="flex-start">
            <icons.MuiLinkedinIcon fontSize="small" />
            <Typography ml={0.5} variant="caption">
              {company.linkedInURL}
            </Typography>
          </FlexBox>
          <FlexBox align="center" justify="flex-start">
            <icons.MuiEmployeeIcon fontSize="small" />
            <Typography ml={0.5} variant="caption">
              {numberFormat(company.memberCount)} members
            </Typography>
          </FlexBox>
        </Box>
      </FlexBox>
      <Typography mt={1} variant="caption">
        {company.bio}
      </Typography>
    </Modal>
  );
};

export default CompanyDetailModal;
