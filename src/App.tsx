import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import {AppOverlay} from "./components/appOverlay"
import { store } from "./redux/reduxStore"
import { Provider} from "react-redux"
import firebase from '@firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {

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

    const fetchMakes = async() => {
        const makes = await getDocs(collection(db, "Makes/Ford/Models"))
        //console.log(makes)
        return(makes)
    
    }
    

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    useEffect(() => {
        console.log(fetchMakes())
    })

    return (
        <Provider store={store}>
            <div className="App" style = {{margin: "5%"}} >
                <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
                <AppOverlay/>   
            </div>
        </Provider>
    );
}

export default App;
