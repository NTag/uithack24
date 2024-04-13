import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ChallengePage } from "./pages/Challenge";
import { OnboardingHomePage } from "./pages/Onboarding/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/challenge/:id">
          <ChallengePage />
        </Route>
        <Route path="/">
          <OnboardingHomePage />
        </Route>
      </Switch>
    </Router>
  );
}
