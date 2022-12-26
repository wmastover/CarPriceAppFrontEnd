import React from 'react';
// row import intentional, once back end is fixed, can sort photo (space) link error out
import { params, row  } from '../type/data';
import { useState } from 'react';
import Popup from 'reactjs-popup';


export const Row = ({row,params}: {row:any, params:params}) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const expectedPrice = Number(params.parameterA)* (Math.pow(Math.E, (Number(params.parameterB) * Number(row.Milage)* -1)))

    const price = Number(row?.Price.replace("£","").replace(",",""))

    // 
    // this corrects for the space in the photo link field name on firestore
    // once this is fixed, the row type above should be row not any
    // 
    const PhotoLink = row["Photo Link"]
    const percentageDiscount = ((expectedPrice - price) / price) * 100
    // 
    // this corrects for the space in the photo link field name on firestore
    // once this is fixed, the row type above should be row not any
    // 

    console.log(PhotoLink)
    console.log(PhotoLink)

    const openInNewTab = (url: any) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div style={{display: "flex", flexDirection: "row", flex: 1, fontSize: 25, height: "120px"}}
        >
            
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div style={{height: "500px", width: "500px", backgroundColor: "grey",
                opacity: "95%", borderRadius: 10}}>
                <button className="close" onClick={closeModal} style={{borderRadius: 100,
                borderColor: "black"}}>
                    &times;
                </button>
                <div>

                    <div style={{backgroundColor: "whitesmoke", flex: 1, marginInline: "20%", 
                                marginTop: "5%", marginBottom: "3%",padding: "1%", borderRadius: 10, display: "flex"}}>
                        <div style={{flex: 1}}></div>
                        <div style={{flex: 1}}>
                            Click Photo to View Listing
                            <img style={{maxHeight: "200px", maxWidth: "200px"}}
                            src={PhotoLink}
                            alt="car"
                            onClick={() => {
                                openInNewTab(row.Link)
                            }
                                
                            }
                            />
                        </div> 
                        <div style={{flex: 1}}></div>
                    </div>
                    <div  style={{flex: 1, display: "flex", flexDirection: "row"}}>
                        <div style={{flex: 1, padding: "3%", marginLeft: "5%", marginRight: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Price
                        </div>
                        <div style={{flex: 1, padding: "3%",  marginRight: "5%",  marginLeft: "2%",
                        marginBottom: "2%",backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Expected Price
                        </div>
                    </div>
                    <div  style={{flex: 1, display: "flex", flexDirection: "row"}}>
                        <div style={{flex: 1, padding: "3%", marginLeft: "5%", marginRight: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Discount
                        </div>
                        <div style={{flex: 1, padding: "3%",  marginRight: "5%",  marginLeft: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Percentage Discount
                        </div>
                    </div>
                    <div  style={{flex: 1, display: "flex", flexDirection: "row"}}>
                        <div style={{flex: 1, padding: "3%", marginLeft: "5%", marginRight: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Milage
                        </div>
                        <div style={{flex: 1, padding: "3%",  marginRight: "5%",  marginLeft: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Engine Size
                        </div>
                    </div>
                    <div  style={{flex: 1, display: "flex", flexDirection: "row"}}>
                        <div style={{flex: 1, padding: "3%", marginLeft: "5%", marginRight: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Manual vs Auto
                        </div>
                        <div style={{flex: 1, padding: "3%",  marginRight: "5%",  marginLeft: "2%",
                        marginBottom: "2%", backgroundColor: "whitesmoke", borderRadius: 10}}>
                            Fuel Type
                        </div>
                    </div>
                </div>
                
                </div>
            </Popup>

            <div style={{backgroundColor: "whitesmoke", flex: 1, margin: "2%", 
            borderRadius: 10,  flexDirection: "row", display: "flex"}}>
            
                <div
                style={{display: "flex", flexDirection: "column", flex: 1}}>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    Price: </div>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    {row?.Price}</div>
                </div>
                <div
                style={{display: "flex", flexDirection: "column", flex: 1}}>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    Milage:</div>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    {row?.Milage}</div>
                </div>
                <div
                style={{display: "flex", flexDirection: "column", flex: 1}}>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    Expected Price:</div>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    £{Math.trunc(expectedPrice)}</div>
                </div>
                <div
                style={{display: "flex", flexDirection: "column", flex: 1,
                }}>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    Discount: 
                    </div>
                    <div
                    style={{display: "flex", flex: 1, paddingInline: "5%", fontSize: 20}}>
                    {Math.trunc(percentageDiscount)}%</div>
                </div>
                <div
                style={{display: "flex", flexDirection: "column", flex: 1,
                }}>
                    <div  style={{padding: "2%", flex: "1"}}></div>
                    <button style={{padding: "2%",margin: "2%", backgroundColor: "Grey",
                     flex: "1", borderRadius: 10}}
                     onClick={() => {setOpen(o => !o)}}>
                        More Detail
                    </button>
                    <div  style={{padding: "2%", flex: "1"}}></div>
                </div>             
             
            </div>
        </div>
    );
}

