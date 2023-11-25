import React, { FC } from "react";

import ResumeItemHeader from "./ResumeItemHeader";
import ResumeItem from "./ResumeItem";
import { useResumeContext } from "../hooks/useResumeContext";
import { useResumeById } from "../hooks/useResume";

const SelectedResumeDetail: FC = () => {
  const { resumeId, onChangeActiveSection, activeSection } = useResumeContext();

  const { data: resume } = useResumeById(resumeId!);

  if (!resume) return <></>;

  return (
    <>
      <ResumeItemHeader resume={resume} />
      {React.Children.toArray(
        resume?.resumeItems?.map((resumeItem) => {
          return (
            <ResumeItem
              handleOnChangeSection={onChangeActiveSection}
              isActiveSection={resumeItem.id === activeSection}
              item={resumeItem}
            />
          );
        })
      )}
    </>
  );
};

export default SelectedResumeDetail;
