import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import { ChallengePage } from "./pages/Challenge";
import { DashboardPage } from "./pages/Dashboard";
import { FeedbackPage } from "./pages/Feedback";
import { OnboardingHomePage } from "./pages/Onboarding/Home";
import { OnboardingQuestionsPage } from "./pages/Onboarding/Questions";
import imgConnect from "./assets/connect.png";
import imgTitle from "./assets/title.svg";
import styled from "styled-components";

const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width < 768;
};

const Nav = () => (
  <Router>
    <Switch>
      <Route path="/onboarding/:category/:step">
        <OnboardingQuestionsPage />
      </Route>
      <Route path="/challenges/:id/feedback">
        <FeedbackPage />
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

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 32px 64px;
  gap: 64px;
`;

const PhoneContainer = styled.div`
  border: 8px solid white;
  border-radius: 48px;
  width: 450px;

  overflow-y: scroll;
`;

const DemoContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-weight: bold;
    font-size: 24px;
    text-decoration: underline;
  }

  & > p {
    margin-top: 64px;
  }
`;

const ImgTitle = styled.img`
  height: 256px;
`;

const ImgQRCode = styled.img`
  height: 256px;
  margin-top: 64px;
`;

export default function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <Nav />;
  }

  return (
    <DesktopContainer>
      <DemoContainer>
        <ImgTitle src={imgTitle} alt="QueerQuest" />
        <h3>www.queerquest.ovh</h3>
        <ImgQRCode src={imgConnect} alt="Connect to QueerQuest" />
        <h4>Let’s connect!</h4>
        <p>
          The code is here:{" "}
          <a href="https://github.com/NTag/uithack24" target="_blank">
            https://github.com/NTag/uithack24
          </a>
        </p>
      </DemoContainer>
      <PhoneContainer>
        <Nav />
      </PhoneContainer>
    </DesktopContainer>
  );
}
