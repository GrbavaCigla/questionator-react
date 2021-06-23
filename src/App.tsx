import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
