import { FC } from "react";
import { Button, Grid } from "@mui/material";
import { SelectBox, TextBox } from "../../common/kit";

const JobSearchForm: FC = () => {
   return (
      <form style={{ width: "100%" }}>
         <Grid spacing={2} container>
            <Grid item xs={12} md={4}>
               <TextBox label="Job Title" />
            </Grid>
            <Grid item xs={12} md={4}>
               <SelectBox
                  defaultLabelOption="Select Your Job Level"
                  label="Job Level"
                  options={[
                     { text: "Intern", value: "Intern" },
                     { text: "Junior", value: "Junior" },
                     { text: "MidLevel", value: "MidLevel" },
                     { text: "Senior", value: "Senior" },
                     { text: "Chief", value: "Chief" },
                  ]}
               />
            </Grid>
            <Grid item xs={12} md={4}>
               <SelectBox
                  defaultLabelOption="Select Your Job Location"
                  label="Job Location"
                  options={[
                     { text: "Tehran", value: "Tehran" },
                     { text: "Shiraz", value: "Shiraz" },
                     { text: "Gilan", value: "Gilan" },
                     { text: "North", value: "North" },
                     { text: "East", value: "East" },
                     { text: "West", value: "West" },
                  ]}
               />
            </Grid>
            <Grid alignSelf="end" xs={12} item md={2}>
               <Button size="large" variant="contained" fullWidth>
                  Search Jobs
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};

export default JobSearchForm;
