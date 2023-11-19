export const loginPageSeoMeta = () => ({
   title: "Login Page",
});

export const signupPageSeoMeta = () => ({
   title: "Signup Page",
});

export const profilePageSeoMeta = () => ({
   title: "Profile Page",
});

export const jobsPageSeoMeta = () => ({
   title: "Jobs Page",
   contents: [
      {
         key: "description",
         value: "This page used for jobs and apply for them",
      },
      { key: "keywords", value: "job, job portal, job oppurtuneties" },
   ],
});

export const companiesPageSeoMeta = () => ({
   title: "Companies Page",
   contents: [
      {
         key: "description",
         value: "This page used for list of companies that need employee",
      },
      {
         key: "keywords",
         value: "job, job portal, job oppurtuneties",
      },
   ],
});
