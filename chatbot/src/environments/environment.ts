// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  config: {
    apiKey: 'AIzaSyDoi6yZEWBZKRMQ3TFo6SH6zH8L_E3JOfQ',
    authDomain: 'chatbot-cf5b0.firebaseapp.com',
    databaseURL: 'https://chatbot-cf5b0.firebaseio.com',
    projectId: 'chatbot-cf5b0',
    storageBucket: 'chatbot-cf5b0.appspot.com',
    messagingSenderId: '263606296578'
  }
};
