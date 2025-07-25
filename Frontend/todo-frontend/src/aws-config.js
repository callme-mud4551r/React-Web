import { Amplify } from 'aws-amplify';

Amplify.configure({
  // No Auth, no OAuth — purely a placeholder for future expansions
  // You can add other modules here later (like API or Storage)
});

console.log("Amplify configured without Auth or OAuth");