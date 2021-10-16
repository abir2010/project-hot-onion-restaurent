import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from "../Banner/Banner";
import Breakfast from "../Breakfast/Breakfast";
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
        </Switch>
        <Review></Review>
      </BrowserRouter>
    </div>
  );
};

export default MainHome;
