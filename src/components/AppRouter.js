import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import NavBarPrivate from "./UI/NavBar/NavBarPrivate";
import NavBarPublic from "./UI/NavBar/NavBarPublic";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.githubAuth.user);

  return localStorage.getItem("auth") || isAuth?.user ? (
    <>
      <NavBarPrivate />
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  ) : (
    <>
      <NavBarPublic />
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
