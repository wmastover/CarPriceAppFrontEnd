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
    let confidenceLevelStyle = { flex: 1, display: "flex", marginInline:"5%", color:"Black"}

    if(numberOfDataPoints > 300) {
         confidenceLevel = "High"
         confidenceLevelStyle.color = "green"
    } else if ( numberOfDataPoints > 100 && numberOfDataPoints < 300) {
         confidenceLevel = "Medium"
         confidenceLevelStyle.color = "yellow"
    } else if ( numberOfDataPoints > 0 && numberOfDataPoints < 100){ 
         confidenceLevel = "low"
         confidenceLevelStyle.color = "red"}
    
    console.log(confidenceLevel)
    console.log(confidenceLevelStyle)


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
                    style={confidenceLevelStyle}
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
