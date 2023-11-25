import { FC } from "react";
import { Avatar, FlexBox, Modal } from "@/common/kit";
import { JOB_DETAIL_SUBJECT } from "@/constant/modalSubjects";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { numberFormat } from "@/utils";
import { icons } from "@/constant/icons";
import { APP_THEME_COLOR } from "@/constant";
import { makeStyles } from "tss-react/mui";
import { useAppContext } from "@/context";
import { TJob } from "../types";

const JobModalItem: FC = () => {
  const { modalContent: job } = useAppContext<TJob>();
  const { classes } = useStyles();

  return (
    <Modal subject={JOB_DETAIL_SUBJECT}>
      <FlexBox justify="flex-start">
        <Avatar height="70px" width="70px" apiSrc={job?.company?.logo} />
        <Box ml={1}>
          <Typography variant="h4">{job?.title}</Typography>
          <Typography mt={0.5} variant="h6">
            {job?.company?.name}
          </Typography>
        </Box>
      </FlexBox>
      <Typography mt={2} variant="caption">
        <FlexBox justify="flex-start">
          <icons.MuiAttachMoneyIcon className={classes.icon} /> Salary {numberFormat(job?.salary)}
        </FlexBox>
      </Typography>
      <Typography variant="caption">
        <FlexBox justify="flex-start">
          <icons.MuiChartIcon className={classes.icon} />
          {job?.level?.join(", ")}
        </FlexBox>
      </Typography>
      <Typography variant="caption">
        <FlexBox justify="flex-start">
          <icons.MuiGlobeIcon className={classes.icon} /> {job?.country} {job?.provience}
        </FlexBox>
      </Typography>
      <Typography my={2} variant="caption">
        {job?.description}
      </Typography>
      <Stack direction="row" columnGap={1} rowGap={1} flexWrap="wrap">
        {job?.tags?.map((tag) => (
          <Chip size="small" color="primary" label={tag} />
        ))}
      </Stack>
    </Modal>
  );
};

export default JobModalItem;

const useStyles = makeStyles()(() => ({
  icon: {
    fill: APP_THEME_COLOR[700],
    fontSize: "20px",
    marginRight: "5px",
  },
}));
