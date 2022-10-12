// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firstName: 'Shehan',
  dialogflow: {
    projectId: "ng-iomj"
  },
  backend: {
    baseUrl: "http://localhost:3000/",
    apiUrl: "http://localhost:3000/getintentmessage",
    requestTextUrl: "http://localhost:3000/getintentmessage"
  },
  firebaseConfig = {
    apiKey: "AIzaSyCzO-5nlRAWa4DxqEGVjS6W3eU7tUlkOiQ",
    authDomain: "irrproject-88d75.firebaseapp.com",
    projectId: "irrproject-88d75",
    storageBucket: "irrproject-88d75.appspot.com",
    messagingSenderId: "637882467223",
    appId: "1:637882467223:web:e1875b8888c466cc353ad2"
  };
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
