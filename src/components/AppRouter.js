import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { privateRoutes, publicRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";
import NavBarPrivate from "./UI/NavBar/NavBarPrivate";
import NavBarPublic from "./UI/NavBar/NavBarPublic";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
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
      </Routes>{" "}
    </>
  );
};

export default AppRouter;
