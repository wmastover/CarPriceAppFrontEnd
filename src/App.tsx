

import './App.css';

import {AppOverlay} from "./components/appOverlay"
import { store } from "./redux/reduxStore"
import { Provider} from "react-redux"
import Video from "./assets/videoBg.mp4"

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {



    
    return (
        <Provider store={store} >
            <div style={{overflow: "clip", overflowY: "hidden",overflowX: "hidden",}}>
                
                <video src={Video} autoPlay loop muted
                style={{
                    objectFit: "cover",
                    width: "100vw",
                    height: "100vh",
                    filter: "blur(20px)",
                    

                }}
                />
                <div className="App" 
                style = {{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    objectFit: "fill"
                    }} >
                
                    
                    <AppOverlay />   
                    
                </div>
            </div>
        </Provider>
    );
}

export default App;
