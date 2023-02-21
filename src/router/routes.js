import SignIn from "./../pages/SignIn/SignIn";
import ErrorPage from "./../pages/Error/ErrorPage";
import Profile from "./../pages/UserProfile/UserProfile";
import GitHubSearch from "./../pages/GitHubSearch/GitHubSearch";
import About from "../pages/About/About";

export const privateRoutes = [
  {
    path: "/*",
    element: ErrorPage,
  },

  {
    path: "/github-API",
    element: About,
  },
  {
    path: "/search-a-user",
    element: GitHubSearch,
  },

  {
    path: "/profile",
    element: Profile,
  },
];

export const publicRoutes = [
  {
    path: "/github-API",
    element: About,
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
