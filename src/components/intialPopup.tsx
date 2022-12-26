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
                            <h1>Autotrader is DUMB</h1>    
                            <img style={{maxHeight: "400px", maxWidth: "400px", borderRadius: 5}}
                            src={image}
                            alt="car"/>
                            <h3>Why would I say that? Car price is directly related to
                                Milage. What does this mean? it means that we can find 
                                amazing deals you won't find on Autotrader.
                            </h3>
                
                        </div>
                    <div style={{flex: 1}}></div>
                </div>
                
            </div>
        </Popup>
    )
}


