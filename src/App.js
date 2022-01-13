import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInAndRegisterPage from "./pages/sign-in-and-register/sign-in-and-register.component";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndRegisterPage} />
      </Switch>
    </div>
  );
};

export default App;
