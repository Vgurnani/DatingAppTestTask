import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { interceptor } from "utils/interceptor";
import LoginContainer from "containers/Login";
import DashboardContainer from "containers/DashboardContainer";
import MemberContainer from "containers/MemberContainer";

export default function App() {
  interceptor();
  return (
    <Fragment>
      <Switch>
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/members" component={MemberContainer} />
        <Route exact path="/" component={LoginContainer} />
      </Switch>
    </Fragment>
  );
}
