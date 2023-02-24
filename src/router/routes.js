import SignIn from "./../pages/SignIn/SignIn";
import ErrorPage from "./../pages/Error/ErrorPage";
import Profile from "./../pages/UserProfile/UserProfile";
import GitHubHelper from "../pages/GitHubHelper/GitHubHelper";
import Main from "../pages/Main/Main";

export const privateRoutes = [
  {
    path: "/*",
    element: ErrorPage,
  },

  {
    path: "/github-API",
    element: Main,
  },
  {
    path: "/helper",
    element: GitHubHelper,
  },

  {
    path: "/profile",
    element: Profile,
  },
];

export const publicRoutes = [
  {
    path: "/github-API",
    element: Main,
  },
  {
    path: "/*",
    element: ErrorPage,
  },

  {
    path: "/signin",
    element: SignIn,
  },
];
