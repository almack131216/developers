import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ConsoleLog from "./assets/console-log";

// import SiteData from "./assets/site-data";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/error";
import BoxContainer from "./containers/list-container";
import ItemContainer from "./containers/item-container";
// import rootReducer from "./reducers/basic";
import listReducer from "./reducers/list";
import itemReducer from "./reducers/item";
// combining two reducers into a single reducer
const rootReducer = combineReducers({
  list: listReducer,
  item: itemReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
ConsoleLog("STORE:", store.getState());

class App extends React.Component {
  constructor(props) {
    super(props);
    ConsoleLog("[App] constructor");
  }

  componentDidMount() {
    ConsoleLog("[App] componentDidMount");
  }

  render() {
    ConsoleLog("[App] render... ");

    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={BoxContainer} />
            <Route exact path="/movie/:slug" component={ItemContainer} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
