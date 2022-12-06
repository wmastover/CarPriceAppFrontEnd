import React, { useEffect } from 'react';
import { Row } from './row';
import { Form } from './form';
import {  useSelector } from 'react-redux';
import { RootState} from "../redux/reduxStore"
import { Firestore } from 'firebase/firestore';

export const AppOverlay = () => {


    const rows = useSelector((state:RootState) => state.rows.value)
    
    
    return (
        <div style={{display: "flex", flexDirection: "row", }}>
            {/* left column */}
            <div style={{flex: 1}}></div>

            <div style={{backgroundColor: "grey", padding: "2%", opacity: "80%",
                        borderRadius: 10, flex: 6}}>
                <header style={{flexDirection: "row"}}>
                    <h1 data-testid="test">Car Data App</h1>                
                </header>

                <Form />
                <div
                style={{flexDirection: "row", display: "flex",}}
                >
                    <h3
                    style={{flex: 1, display: "flex", marginInline:"5%"}}
                    >No of DataPoints: </h3>
                    <h3
                    style={{flex: 1, display: "flex", marginInline:"5%"}}
                    >Confidence Level: </h3>
                </div>
                <Row/>
            </div>

            {/* right column */}
            <div style={{flex: 1}}></div>
        </div>
    );
}
