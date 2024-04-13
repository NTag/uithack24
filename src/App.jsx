import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ChallengePage } from "./pages/Challenge";
import { OnboardingHomePage } from "./pages/Onboarding/Home";
import { OnboardingQuestionsPage } from "./pages/Onboarding/Questions";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding/:category">
          <OnboardingQuestionsPage />
        </Route>
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
