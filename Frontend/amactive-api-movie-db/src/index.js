import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/error";
import BoxContainer from "./containers/box-container";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  render() {
    // console.log("[App.js] render... ");
    console.log("[App.js] render... ");

    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/">
              <div>
                <p>[index.js]</p>
                <BoxContainer />
              </div>
            </Route>

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
