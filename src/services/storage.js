import { addHours, addMinutes } from "date-fns";

const ONBOARDING_ANSWERS_JEY = "onboardingAnswers";
const CHALLENGES_KEY = "challenges";
const CHALLENGE_KEY = "challenge";
const NEXT_CHALLENGE_DATE_KEY = "nextChallengeDate";

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
  return JSON.parse(localStorage.getItem(CHALLENGES_KEY) || "[]");
};

export const setChallenges = (challenges) => {
  localStorage.setItem(CHALLENGES_KEY, JSON.stringify(challenges));
};

export const getChallenge = () => {
  if (!localStorage.getItem(CHALLENGE_KEY)) {
    return null;
  }

  return JSON.parse(localStorage.getItem(CHALLENGE_KEY));
};

export const setChallenge = (challenge) => {
  localStorage.setItem(CHALLENGE_KEY, JSON.stringify(challenge));
};

export const removeChallenge = () => {
  localStorage.removeItem(CHALLENGE_KEY);
};

export const getNextChallengeDate = () => {
  const value = localStorage.getItem(NEXT_CHALLENGE_DATE_KEY);
  return value ? new Date(value) : null;
};

export const setNextChallengeDate = () => {
  const nextDate = addHours(new Date(), 2 + Math.ceil(Math.random() * 20));
  localStorage.setItem(NEXT_CHALLENGE_DATE_KEY, nextDate.toISOString());
};
