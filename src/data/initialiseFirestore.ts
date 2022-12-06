import { getFirestore } from 'firebase/firestore';

import { initializeApp } from "firebase/app";


export const initializeFirestoreDb = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCJnV5tX7MUnsV7LWz-lPOFAZiP7a1V0uI",
        authDomain: "car-price-data.firebaseapp.com",
        projectId: "car-price-data",
        storageBucket: "car-price-data.appspot.com",
        messagingSenderId: "663275972524",
        appId: "1:663275972524:web:4c8578976ce5817934bc09",
        measurementId: "G-L463SMR1D9"
      };
    
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    return(db)
}
