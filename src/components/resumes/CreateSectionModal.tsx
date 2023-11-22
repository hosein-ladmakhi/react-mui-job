import React, { FC } from "react";
import { Modal } from "@/common/kit";
import { ADD_NEW_SECTION_TO_RESUME_SUBJECT } from "@/constant/modalSubjects";
import { Button, Grid, Typography } from "@mui/material";
import { EResumeItemType } from "@/types/apis/resume";
import { useAddResumeItem, useAppContext } from "@/hooks";

const CreateSection: FC = () => {
   const { modalContent, handleModalStatus } = useAppContext();
   const { addResumeItemMutate } = useAddResumeItem();

   const onSelectSection = async (type: EResumeItemType) => {
      addResumeItemMutate({
         resume: modalContent?.id,
         type,
      });
      handleModalStatus(false);
   };

   return (
      <Modal size="sm" subject={ADD_NEW_SECTION_TO_RESUME_SUBJECT}>
         <Typography variant="h4">Add New Section To Resume</Typography>
         <Grid spacing={3} mt={2} container>
            {React.Children.toArray(
               Object.values(EResumeItemType).map((type) => (
                  <Grid item xs={12}>
                     <Button
                        onClick={onSelectSection.bind(null, type)}
                        size="large"
                        fullWidth
                        variant="contained"
                     >
                        Create {type}
                     </Button>
                  </Grid>
               ))
            )}
         </Grid>
      </Modal>
   );
};

export default CreateSection;
