import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../../redux/auth-selectors";

export default function PublicRoute({ restricted, children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={"/contacts"} /> : children}
    </Route>
  );
}
