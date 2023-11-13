export const appConfig = {
   BASE_URL: import.meta.env.VITE_BASE_URL,
   BASE_ASSET_URL: import.meta.env.VITE_BASE_URL + "/public",
   TOKEN: "APP_TOKEN",
};

export const appRouterPath = {
   companies: "/",
   jobs: "/jobs",
   profile: "/profile",
   resumes: "/resume",
   notfound: "*",
};
