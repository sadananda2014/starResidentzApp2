// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCbFEETrCg_fiBJwXnQVkedLrb-6iBabd8",
    authDomain: "start-hotel.firebaseapp.com",
    databaseURL: "https://start-hotel.firebaseio.com",
    projectId: "start-hotel",
    storageBucket: "start-hotel.appspot.com",
    messagingSenderId: "561824762626"
  }
};
