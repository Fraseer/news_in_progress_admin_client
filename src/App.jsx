import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CreateArticle from "./components/CreateArticle";
import ReviewArticles from "./components/ReviewArticles";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/create-article" component={CreateArticle}></Route>
        <Route exact path="/review-articles" component={ReviewArticles}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
