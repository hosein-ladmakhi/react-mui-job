import { FlexBox } from "@/common/kit";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { icons } from "@/constant/icons";
import { makeStyles } from "tss-react/mui";
import { APP_THEME_COLOR } from "@/constant";
import { errorNotify, successNotify } from "@/lib";
import { RESUME_SECTION_MAPPER } from "../mappers";
import { useAddDataResumeItem, useDeleteResumeItem } from "../hooks/useResume";
import { TResumeItem } from "../types";

interface IResumeItemProps {
  item: TResumeItem;
  isActiveSection: boolean;
  handleOnChangeSection: (id: number) => void;
}

const ResumeItem: FC<IResumeItemProps> = ({ item, isActiveSection, handleOnChangeSection }) => {
  const { classes } = useStyles();
  const { addDataResumeMutate } = useAddDataResumeItem();
  const { deleteResumeItemMutate } = useDeleteResumeItem();

  const Section = RESUME_SECTION_MAPPER?.[item.type];

  const handleDeleteItem = async (id: number) => {
    const response = await deleteResumeItemMutate(id);
    if (response) {
      successNotify("delete successfully ...");
    } else {
      errorNotify("delete section failed ...");
    }
  };

  return (
    <Box className={classes.root}>
      <FlexBox justify="space-between">
        <Typography variant="h3">{item.type}</Typography>
        <div>
          <IconButton onClick={handleDeleteItem.bind(null, item.id)}>
            <icons.MuiDeleteIcon />
          </IconButton>
          <IconButton onClick={handleOnChangeSection.bind(null, item.id)}>
            {isActiveSection ? <icons.MuiExpandLess /> : <icons.MuiExpandMore />}
          </IconButton>
        </div>
      </FlexBox>
      <Collapse in={isActiveSection}>
        <Section data={item.data} formClass={classes.form} mutate={addDataResumeMutate} id={item.id} />
      </Collapse>
    </Box>
  );
};

export default ResumeItem;

const useStyles = makeStyles()(() => ({
  form: {
    marginTop: "20px",
  },
  root: {
    background: APP_THEME_COLOR[900],
    padding: "20px",
    borderRadius: "4px",
    marginBottom: "20px",
  },
}));
