import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ChallengePage } from "./pages/Challenge";
import { DashboardPage } from "./pages/Dashboard";
import { OnboardingHomePage } from "./pages/Onboarding/Home";
import { OnboardingQuestionsPage } from "./pages/Onboarding/Questions";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding/:category/:step">
          <OnboardingQuestionsPage />
        </Route>
        <Route path="/challenges/:id">
          <ChallengePage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/">
          <OnboardingHomePage />
        </Route>
      </Switch>
    </Router>
  );
}
