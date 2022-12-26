import React from 'react';
import { Row } from './row';
import { Form } from './form';
import {  useSelector } from 'react-redux';
import { RootState} from "../redux/reduxStore"
import Select from "react-select"
import { FaCarSide } from "react-icons/fa"

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
        <div style={{display: "flex", flexDirection: "row",height: "92%",  marginTop: "2%", marginBottom: "2%"}}>
            {/* left column */}
            <div style={{flex: 1, }}></div>

            <div style={{backgroundColor: "grey",  padding: "2%", opacity: "80%",
                        borderRadius: 10, flex: 6, flexDirection: "row"  }}>
                <div style={{flexDirection: "row", flex: 1, display:"flex"}}>
                     
                    <div style={{flex: 1 }}><FaCarSide style={{flex: 1}}/>      Car Finder</div>          
                </div> 

                <Form />
                <Form />
                <div
                style={{marginInline: "5%", flexDirection: "row", display: "flex",}}
                >
                    <h4
                    style={{flex: 1, display: "flex", marginInline:"5%"}}
                    >No of DataPoints: {params.numberOfDataPoints}</h4>
                    <h4
                    style={confidenceLevelStyle}
                    >Confidence Level: {confidenceLevel}</h4>
                    <Select 
                    
                    placeholder="sort"
                    options={[{
                        value: "Lowest Milage", label: "Lowest Milage"
                    },
                    {
                        value: "Lowest Price", label: "Lowest Price"
                    }, 
                    {
                        value: "Best Value", label: "Best Value"
                    }]}
                    ></Select>
                </div>
                <div style={{overflow:"scroll", overflowX: "hidden", height: "65%",}}>
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
