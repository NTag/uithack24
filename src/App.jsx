import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { OnboardingHomePage } from "./pages/Onboarding/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <OnboardingHomePage />
        </Route>
      </Switch>
    </Router>
  );
}
