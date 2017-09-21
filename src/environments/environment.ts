// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB-xsAZK0HFQardeB-AXADUO-_qjmCPXuI",
    authDomain: "fir-oauth-demo-bb6d1.firebaseapp.com",
    databaseURL: "https://fir-oauth-demo-bb6d1.firebaseio.com",
    projectId: "fir-oauth-demo-bb6d1",
    storageBucket: "fir-oauth-demo-bb6d1.appspot.com",
    messagingSenderId: "56971970004"
  }
};
