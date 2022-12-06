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
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
//

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {


    

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    
    return (
        <Provider store={store}>
            <div className="App" style = {{margin: "5%"}} >
                <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
                <AppOverlay />   
            </div>
        </Provider>
    );
}

export default App;
