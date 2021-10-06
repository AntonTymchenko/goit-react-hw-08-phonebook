import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "./components/Panel/Panel";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import Filter from "./components/Filter";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import AppBar from "./components/AppBar/AppBar";
import authOperations from "./redux/auth-operation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./index.css";
import authSelectors from "./redux/auth-selectors";

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !isFetchingCurrentUser && (
      <>
        <Router>
          <AppBar />
          <section>
            <Container>
              <Panel title="The Phonebook" />
            </Container>
          </section>
          <Switch>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <Filter />
            </PrivateRoute>
            <Route
              path="/form"
              render={(props) => <ContactForm {...props} />}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </>
    )
  );
}

export default App;
