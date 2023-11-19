export type TUser = {
   username: string;
   password: string;
   email: string;
   bio?: string;
   age: string;
   firstName: string;
   lastName: string;
   logo?: string;
};

export type TSignup = Omit<TUser, "logo">;

export type TLogin = Pick<TUser, "email" | "password">;

export type TJwtToken = { id: number; exp: number };
