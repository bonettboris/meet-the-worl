import React from "react";
import { Route, Switch } from "react-router";

import HomePage from "../Home";
import NotFoundPage from "../NotFound";

import NavbarComponent from "../../Components/Common/Navbar";

const AppContainer = () => {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="*" component={() => <NotFoundPage />} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContainer;
