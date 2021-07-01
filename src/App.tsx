import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import Account from "./pages/Account";
import Question from "./pages/Question";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="font-oswald">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <AuthForm />
          </Route>
          <Route exact path="/login">
            <AuthForm _login={true} />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route path="/question/:id">
            <Question />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
