import React from "react";

import {
  BrowserRouter as Router,
  Route,
  //   Redirect,
  Switch
} from "react-router-dom";

import Home from "../Container/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import Show from "../Container/ShowCV/Show";
import Upload from "../Container/UploadCV/Upload";
import { ToastContainer } from "react-toastify";

const AppRouter = prop => (
  <Router>
    <Switch>
      <Route exact path="/" render={props => <Home {...prop} {...props} />} />
      <Route
        exact
        path="/upload"
        render={props => <Upload {...prop} {...props} />}
      />
      <Route
        exact
        path="/show"
        render={props => <Show {...prop} {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
    <ToastContainer autoClose={3500} />
  </Router>
);

export default AppRouter;
