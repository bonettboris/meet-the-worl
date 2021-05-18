import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../Home";
import NotFoundPage from "../NotFound";
import NavbarComponent from "../../Components/Common/Navbar";
import FooterComponent from "../../Components/Common/Footer";

const AppContainer = () => {
  return (
    <div className="flex">
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="*" component={() => <NotFoundPage />} />
      </Switch>
      <FooterComponent />
    </div>
  );
};

export default AppContainer;