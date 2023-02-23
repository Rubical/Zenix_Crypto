import SignIn from "./../pages/SignIn/SignIn";
import ErrorPage from "./../pages/Error/ErrorPage";
import Profile from "./../pages/UserProfile/UserProfile";
import GitHubSearch from "./../pages/GitHubSearch/GitHubSearch";
import News from "../pages/News/News";

export const privateRoutes = [
  {
    path: "/*",
    element: ErrorPage,
  },

  {
    path: "/github-API",
    element: News,
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
    element: News,
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
