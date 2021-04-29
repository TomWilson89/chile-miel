import React from "react";
import { Route } from "react-router-dom";

import ErrorBoundary from "../../error/ErrorBoundary";
import Spinner from "../../../Spinner";

const RouteWithLayout = (props) => {
  const { Layout, Component, isAuth, isLoading, exact, path, ...rest } = props;

  if (isLoading) return <Spinner />;
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(matchProps) => (
        <Layout>
          <React.Suspense fallback={<Spinner />}>
            <ErrorBoundary>
              {Component && <Component {...matchProps} />}
            </ErrorBoundary>
          </React.Suspense>
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
