import React from 'react';
import { row,  } from '../type/data';

export const Row = ({row}: {row?:row}) => {

    // const rowItem = {
    //     letter: " ",
    //     color: "white"

    // } as rowItem

    // if (row === undefined) {
    //     row = [rowItem,rowItem,rowItem,rowItem,rowItem,] as row
    // }


    return (
        <div style={{display: "flex", flexDirection: "row", flex: 1}}>
            <div style={{backgroundColor: "whitesmoke", flex: 1, margin: "2%", 
            padding: "2%", borderRadius: 10,}}>
                <img style={{maxHeight: "200px", maxWidth: "200px"}}
                src="https://media.istockphoto.com/id/1084688262/vector/car-icon-vector-flat-simple-cartoon-transportation-symbol-isolated-on-white-side-view.jpg?s=612x612&w=0&k=20&c=aM8iiKm2WCjsRqGYGxkQPq7vktwkfZBxoduYxvkOCXw="
                alt="cat"
                />
            </div>
            <div style={{backgroundColor: "whitesmoke", flex: 2, margin: "2%", 
            padding: "2%",  borderRadius: 10, opacity: "100%", 
            flexDirection: "column"}}>
            
            <div
            style={{display: "flex", flexDirection: "row", flex: 1}}>
                <text
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Price</text>
                <text
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Milage</text>
            </div>
            <div
            style={{display: "flex", flexDirection: "row", flex: 1}}>
                <text
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Expected Price</text>
                <text
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                % Discount</text>
            </div>            
            </div>
        </div>
    );
}

