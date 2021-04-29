import React from "react";
import { Switch } from "react-router-dom";

import RouteWithLayout from "../components/commons/Layout/RoutesWithLayout";
import MainLayout from "../components/commons/Layout/Main";
import { useSelector } from "react-redux";

const LoginView = React.lazy(() => import("../screens/Login"));

const HomeView = React.lazy(() => import("../screens/Home"));

const RoutesWithLayout = [
  {
    component: HomeView,
    path: "/",
  },
  {
    component: LoginView,
    path: "/login",
  },
];

const Routes = () => {
  const { isAuth, isLoading } = useSelector((state) => state.login);
  return (
    <Switch>
      {RoutesWithLayout.map((page) => {
        return (
          <RouteWithLayout
            key={page.path}
            Layout={MainLayout}
            Component={page.component}
            isAuth={isAuth}
            isLoading={isLoading}
            exact={true}
            path={page.path}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
