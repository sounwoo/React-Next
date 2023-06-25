import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "myfirevasetest.firebaseapp.com",
    projectId: "myfirevasetest",
    storageBucket: "myfirevasetest.appspot.com",
    messagingSenderId: "122142707120",
    appId: "1:122142707120:web:e11be7bc166ab6b56dda75",
};

export const firebaseApp = initializeApp(firebaseConfig);
