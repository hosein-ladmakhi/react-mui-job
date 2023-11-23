import { icons } from "@/constant/icons";
import { toast } from "react-toastify";

export const errorNotify = (message: string) => {
  toast.error(message, { className: "toast_error" });
};

export const successNotify = (message: string) => {
  toast.success(message, { className: "toast_success" });
};

export const notify = (message: string) => {
  toast(message, { className: "toast_default" });
};
