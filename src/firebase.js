import {initializeApp} from "firebase/app"



const firebaseConfig = {
    apiKey: "AIzaSyDOuc61-P33cEe8MV9kW3AP3IRsx1ohUXY",
    authDomain: "fir-auth-ac236.firebaseapp.com",
    projectId: "fir-auth-ac236",
    storageBucket: "fir-auth-ac236.appspot.com",
    messagingSenderId: "753169073500",
    appId: "1:753169073500:web:85acb6308c83888952ed99",
    databaseURL :"https://fir-auth-ac236-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig);