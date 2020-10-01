import React from "react";
import { Switch, Route } from "react-router-dom";
import Job from "../pages/job";
import JobDetail from "../pages/jobDetail";
import Login from "../pages/login";
import ProtectedRoute from "./protectedRoute";

const Routes = () => {
  const FourOhFourPage = () => {
    return (
      <div id="404page">
        <h1>404 Not Found</h1>
      </div>
    );
  };

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/jobs" exact component={Job} />
      <Route path="/" exact component={Job} />
      <ProtectedRoute
        path="/job/:id"
        render={(props) => <JobDetail />}
      />
      <Route path="*" component={FourOhFourPage} />
    </Switch>
  );
};

export default Routes;
