import { FC, PropsWithChildren, createContext, useState } from "react";

type TResumeContext = {
  resumeId?: number;
  activeSection?: number;

  onChangeResume: (id?: number) => void;
  onChangeActiveSection: (id?: number) => void;
};

export const resumeContext = createContext<TResumeContext>({
  onChangeResume: () => {},
  onChangeActiveSection: () => {},
});

export const ResumeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [resumeId, setResumeId] = useState<number>();
  const [activeSection, setActiveSection] = useState<number>();

  const onChangeResume = (id?: number) => setResumeId(id);
  const onChangeActiveSection = (id?: number) => {
    setActiveSection((prevActiveSection) => (prevActiveSection === id ? undefined : id));
  };

  return (
    <resumeContext.Provider
      value={{
        resumeId,
        activeSection,
        onChangeActiveSection,
        onChangeResume,
      }}
    >
      {children}
    </resumeContext.Provider>
  );
};
