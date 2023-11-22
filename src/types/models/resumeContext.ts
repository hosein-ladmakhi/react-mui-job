export type TResumeContext = {
   resumeId?: number;
   activeSection?: number;

   onChangeResume: (id?: number) => void;
   onChangeActiveSection: (id?: number) => void;
};
