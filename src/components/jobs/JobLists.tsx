import { Box, Card, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppContext, useJob } from "../../hooks";
import { SummaryText } from "../../common/kit";
import { numberFormat } from "../../utils";
import { icons } from "../../constant/icons";
import { TJob } from "../../types/apis/job";
import { JOB_DETAIL_SUBJECT } from "../../constant/modalSubjects";
import { Button } from "@/common/kit";

const JobLists: FC = () => {
  const { data } = useJob();
  const { handleOpenModal } = useAppContext();
  const handleDetailJob = (job: TJob) => {
    handleOpenModal(job, JOB_DETAIL_SUBJECT);
  };

  return (
    <Grid item xs={12} lg={10}>
      <Grid spacing={1} container>
        {React.Children.toArray(
          data?.map((job) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card>
                <Typography variant="h5">{job.title}</Typography>
                <SummaryText lineClamp={2} summary={job.description} />
                <Box mb={2} mt={1}>
                  <SummaryText>
                    <b>Company</b> : {job?.company?.name}
                  </SummaryText>
                  <SummaryText>
                    <b>Tech</b> : {job?.tags?.join(", ")}
                  </SummaryText>
                  <SummaryText>
                    <b>Salary</b> : {numberFormat(job?.salary)}
                  </SummaryText>
                </Box>
                <Button Icon={icons.MuiEyeIcon} onClick={handleDetailJob.bind(null, job)}>
                  Show Detail
                </Button>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default JobLists;
