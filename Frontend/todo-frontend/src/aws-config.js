import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify/auth';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_G63w6nmme',
    userPoolWebClientId: '2c45itfb8mia3onu4vvjlbgmh4',
  }
});
