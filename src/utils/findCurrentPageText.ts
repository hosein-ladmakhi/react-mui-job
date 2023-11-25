import { appNavbar } from "@/constant";

export const findCurrentPageText = (path: string) => appNavbar.find((e) => e.path?.startsWith(path))?.text;
