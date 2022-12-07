import React, { useEffect } from 'react';
import { Row } from './row';
import { Form } from './form';
import {  useSelector } from 'react-redux';
import { RootState} from "../redux/reduxStore"

export const AppOverlay = () => {


    const rows = useSelector((state:RootState) => state.rows.value)
    const params = useSelector((state:RootState) => state.params.value)

    const numberOfDataPoints = Number( params.numberOfDataPoints)
    let confidenceLevel = ""
    
    if(numberOfDataPoints > 300) {
         confidenceLevel = "High"
    } else if ( numberOfDataPoints > 100) {
         confidenceLevel = "Medium"
    } else if ( numberOfDataPoints > 0){ 
         confidenceLevel = "low"}

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
                    >No of DataPoints: {params.numberOfDataPoints}</h3>
                    <h3
                    style={{flex: 1, display: "flex", marginInline:"5%"}}
                    >Confidence Level: {confidenceLevel}</h3>
                </div>
                <div>
                    {
                        rows.map((row) => <Row
                        row={row}
                        params={params}
                        />)
                    }
                </div>
            </div>

            {/* right column */}
            <div style={{flex: 1}}></div>
        </div>
    );
}
