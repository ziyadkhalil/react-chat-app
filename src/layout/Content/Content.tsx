import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Content.css";
import Messenger from "views/Messenger/Messenger";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/messenger/:id">
          <Messenger />
        </Route>
        <Route path="/">
          <Redirect to="/messenger/1" />
        </Route>
      </Switch>
    </div>
  );
};
export default Content;
