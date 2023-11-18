import { FC } from "react";
import { useCategory, useViewport } from "../../hooks";
import { Loading, NestedList } from "../../common/kit";
import { Box, Grid } from "@mui/material";
import { APP_THEME_COLOR } from "../../constant";

const JobCategories: FC = () => {
   const { data, isLoading } = useCategory();
   const { isDesktop } = useViewport();

   if (!isDesktop) return <></>;

   return (
      <Grid item md={2}>
         <Box p={2} bgcolor={APP_THEME_COLOR[900]}>
            {isLoading && <Loading variant="circle" />}
            <NestedList
               itemKey="id"
               itemValue="name"
               itemChildren="childrens"
               data={data}
            />
         </Box>
      </Grid>
   );
};

export default JobCategories;
