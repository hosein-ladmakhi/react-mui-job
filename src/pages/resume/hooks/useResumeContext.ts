import { useContext } from "react";
import { resumeContext } from "../context/ResumeContext";

export const useResumeContext = () => useContext(resumeContext);
