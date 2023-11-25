import { TUser } from "@/types/general";

export type TUserContext = {
  // token
  token?: string;
  handleOnChangeToken: (token?: string) => void;
  user?: TUser;
  handleLogout: () => void;
  handleChangeUser: (user: TUser) => void;
};
