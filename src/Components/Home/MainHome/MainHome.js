import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Login from "../../Registration/Login/Login";
import Register from "../../Registration/Register/Register";
import Banner from "../Banner/Banner";
import Breakfast from "../Breakfast/Breakfast";
import CheckOut from "../CheckOut/CheckOut";
import Delivery from "../Delivery/Delivery";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";
import Review from "../Review/Review";

const MainHome = () => {
  return (
    <div>
      <BrowserRouter>
        <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <PrivateRoute path="/checkout">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/delivery">
            <Delivery></Delivery>
          </PrivateRoute>
        </Switch>
        <Review></Review>
      </BrowserRouter>
    </div>
  );
};

export default MainHome;
