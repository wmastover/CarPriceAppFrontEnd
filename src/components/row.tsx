import React from 'react';

import { params, row  } from '../type/data';

export const Row = ({row,params}: {row:any, params:params}) => {

    const expectedPrice = Number(params.parameterA)* (Math.pow(Math.E, (Number(params.parameterB) * Number(row.Milage)* -1)))

    const price = Number(row?.Price.replace("£","").replace(",",""))

    const percentageDiscount = ((expectedPrice - price) / price) * 100
    // 
    // this corrects for the space in the photo link field name on firestore
    // once this is fixed, the row type above should be row not any
    // 
    const PhotoLink = row["Photo Link"]

    console.log(PhotoLink)

    const openInNewTab = (url: any) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };


    return (
        <div style={{display: "flex", flexDirection: "row", flex: 1, fontSize: 25}}
        >
            <div style={{backgroundColor: "whitesmoke", flex: 1, margin: "2%", 
            padding: "1%", borderRadius: 10,}}>
                <img style={{maxHeight: "300px", maxWidth: "300px"}}
                src={PhotoLink}
                alt="cat"
                onClick={() => {
                    openInNewTab(row.Link)
                }
                    
                }
                />
            </div>
            <div style={{backgroundColor: "whitesmoke", flex: 2, margin: "2%", 
            padding: "2%",  borderRadius: 10, opacity: "100%", 
            flexDirection: "column"}}>
            
            <div
            style={{display: "flex", flexDirection: "row", flex: 1}}>
                <h5
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Price: {row?.Price}</h5>
                <h5
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Milage: {row?.Milage}</h5>
            </div>
            <div
            style={{display: "flex", flexDirection: "row", flex: 1}}>
                <h5
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Expected Price: £{Math.trunc(expectedPrice)}</h5>
                <h5
                style={{display: "flex", flexDirection: "row", flex: 1}}>
                Percentage Discount: {Math.trunc(percentageDiscount)}%</h5>
            </div>            
            </div>
        </div>
    );
}

