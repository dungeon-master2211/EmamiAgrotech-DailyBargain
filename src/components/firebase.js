import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCu25uiYcPH7MPEGRAIeGiuRy4BoBf3FLY",
    authDomain: "dailybargain-269e0.firebaseapp.com",
    databaseURL: "https://dailybargain-269e0-default-rtdb.firebaseio.com",
    projectId: "dailybargain-269e0",
    storageBucket: "dailybargain-269e0.appspot.com",
    messagingSenderId: "66660882627",
    appId: "1:66660882627:web:b5850c60e022dc27abea76",
    measurementId: "G-RJ0H8XLHF7"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
