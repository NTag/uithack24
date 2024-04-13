export const CHALLENGES = {
  socialEasy: {
    id: "socialEasy",
    title: "Mirror Challenge",
    durationMinutes: 35,
    options: [
      { text: "Smile at yourself", summary: "Smile at yourself in the mirror" },
      {
        text: 'Say "I love you"',
        bonus: "+5 self-love points",
        summary: 'Say "I love you" to the mirror',
      },
    ],
  },
  socialMedium: {
    id: "socialMedium",
    title: "Going out challenge",
    durationMinutes: 2 * 48 * 60,
    options: [
      { text: "Go for a 10 min walk", summary: "Go for a 10-min walk" },
      {
        text: "Go to the cinema",
        bonus: "+10 social points",
        summary: "Go to the cinema by yourself",
      },
    ],
  },
  socialHard: {
    id: "socialHard",
    title: "Talk to a stranger",
    durationMinutes: 7 * 24 * 60,
    options: [
      { text: "Ask for directions", summary: "Ask a stranger for directions" },
      {
        text: "Small talk",
        bonus: "+15 social points",
        summary: "Have a small talk with a stranger",
      },
    ],
  },
};
