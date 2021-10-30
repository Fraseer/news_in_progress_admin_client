import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CreateArticle from "./components/CreateArticle";
import ReviewArticles from "./components/ReviewArticles";
import EditArticle from "./components/EditArticle";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const App = () => {
  const { authenticated } = useSelector((state) => state);
  return (
    <BrowserRouter>
        <Header />
      {!authenticated ? (
        <Login />
      ) : (
        <>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route
              exact
              path="/create-article"
              component={CreateArticle}
            ></Route>
            <Route
              exact
              path="/review-articles"
              component={ReviewArticles}
            ></Route>
            <Route
              exact
              path="/edit-article/:id"
              component={EditArticle}
            ></Route>
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
