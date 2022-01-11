import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/Homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
      <button onClick="">Go Back</button>
    </div>
  );
};
const TopicsDetailsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS DETAILS PAGE : {props.match.params.topicId}</h1>
      <p> this is the special details section</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/topics/:topicId" component={TopicsDetailsPage} />
      </Switch>
    </div>
  );
};

export default App;
