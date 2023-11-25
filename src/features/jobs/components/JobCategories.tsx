import { FC } from "react";
import { useViewport } from "@/hooks";
import { Loading } from "@/common/kit";
import { Box, Grid, Typography } from "@mui/material";
import { APP_THEME_COLOR } from "@/constant";
import { NestedList } from "@/common/components";
import { useCategory } from "../hooks/useCategory";

const JobCategories: FC = () => {
  const { data, isLoading } = useCategory();
  const { isDesktop } = useViewport();

  if (!isDesktop) return <></>;

  return (
    <Grid item md={2}>
      <Box p={2} bgcolor={APP_THEME_COLOR[900]}>
        {isLoading && <Loading variant="circle" />}
        {data?.length === 0 && <Typography variant="h5">No Category Exist</Typography>}
        <NestedList itemKey="id" itemValue="name" itemChildren="childrens" data={data} />
      </Box>
    </Grid>
  );
};

export default JobCategories;
