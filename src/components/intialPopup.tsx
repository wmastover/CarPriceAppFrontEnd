import Popup from 'reactjs-popup';
import image from '../assets/PopupGraph.png'


export const InitialPopup = (props: any) => {

    
    const closeModal = () => {
        // setOpen(false)
        props.setOpen(false)
        };

    return(
        <Popup open={props.open} closeOnDocumentClick onClose={closeModal}>
            <div style={{height: "500px", width: "500px", backgroundColor: "grey",
            opacity: "95%", borderRadius: 10}}>
                <button className="close" onClick={closeModal} style={{borderRadius: 100,
                borderColor: "black"}}>
                    &times;
                </button>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <div style={{flex: 1}}></div>
                        <div style={{flex: 8}}>
                            <h1 style={{textAlign: "center"}}>Autotrader search = 💩</h1>    
                            <img style={{maxHeight: "400px", maxWidth: "350px",
                            borderRadius: 5, marginLeft: "5%", marginRight: "5%" }}
                            src={image}
                            alt="car"/>
                            <h3>
                                Car price is directly related to Milage.
                            </h3>
                            <h3> 
                                Why should you care? We use this to find deals on cars
                                that you wont find anywhere else
                            </h3>
                
                        </div>
                    <div style={{flex: 1}}></div>
                </div>
                
            </div>
        </Popup>
    )
}


