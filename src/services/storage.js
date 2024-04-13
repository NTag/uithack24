const ONBOARDING_ANSWERS = "onboardingAnswers";

export const getOnboardingAnswers = () => {
  return JSON.parse(localStorage.getItem(ONBOARDING_ANSWERS) || "{}");
};

export const setOnboardingAnswer = (questionId, answer) => {
  const onboardingAnswers = getOnboardingAnswers();
  onboardingAnswers[questionId] = answer;
  localStorage.setItem(ONBOARDING_ANSWERS, JSON.stringify(onboardingAnswers));
};
