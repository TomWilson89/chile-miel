import React from "react";

import Topbar from "../../../Navigation/Topbar";

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Topbar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Main;
