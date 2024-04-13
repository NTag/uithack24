const ONBOARDING_ANSWERS_JEY = "onboardingAnswers";
const CHALLENGES_KEY = "challenges";

export const getOnboardingAnswers = () => {
  return JSON.parse(localStorage.getItem(ONBOARDING_ANSWERS_JEY) || "{}");
};

export const setOnboardingAnswer = (questionId, answer) => {
  const onboardingAnswers = getOnboardingAnswers();
  onboardingAnswers[questionId] = answer;
  localStorage.setItem(
    ONBOARDING_ANSWERS_JEY,
    JSON.stringify(onboardingAnswers)
  );
};

export const getChallenges = () => {
  return JSON.parse(localStorage.getItem(CHALLENGES_KEY) || "{}");
};

export const setChallenges = (challenges) => {
  localStorage.setItem(CHALLENGES_KEY, JSON.stringify(challenges));
};
