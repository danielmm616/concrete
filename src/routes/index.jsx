import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RepositoryPage from "../pages/RepositoryPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/:full/:name">
        <RepositoryPage />
      </Route>
    </Switch>
  );
};

export default Routes;
