import { TUser } from ".";

export type TUserContext = {
   // token
   token?: string;
   handleOnChangeToken: (token?: string) => void;
   user?: TUser;
   handleLogout: () => void;
   handleChangeUser: (user: TUser) => void;
};
