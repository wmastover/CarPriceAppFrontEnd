import React from 'react';
import { useState, useEffect } from 'react';
import Select from "react-select"
import { fetchMakes } from "../data/fetchMakes"
import { fetchModels } from '../data/fetchModels';
import { fetchYears } from '../data/fetchYears';
import { fetchCars } from '../data/fetchCars';
import { arrayToDropdown } from '../data/arrayToDropdown';

import { initializeFirestoreDb } from '../data/initialiseFirestore';


export const Form = () => {

    //initialise firestore

    const db = initializeFirestoreDb()

    //set placeholder values for drop down lists
    const [makes, setMakes] = useState([{
        value: "none", label: "none"
    }])

    const [models, setModels] = useState([{
        value: "none", label: "none"
    }])

    const [years, setYears] = useState([{
        value: "none", label: "none"
    }])


    //query database to get list of makes, and add list to the first dropdown
    useEffect(() => {
        
        fetchMakes(db).then((value) => {
            console.log("makes")
            console.log(value)
            const makesArray = arrayToDropdown(value)
            
            setMakes(makesArray)})
    }, [db])

    

    //create empty variables for drop down selections
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")



    return(
        <form 
        //dont refresh page when the button is pressed
            onSubmit={e => {
                e.preventDefault()
            } 
            }
        >
            <div style={{flexDirection: "row", display: "flex", marginInline:"5%",
            marginTop:"2%", marginBottom:0, }}>
                <div   
                style={{margin: "2%", flex: 2}}>
                    <Select 
                    options={makes}
                    placeholder="Make"
                    onChange={(e) => {
                        // if you change the make, refresh the models dropdown
                        if (e !== null) { 
                            //set make variable = to selection
                            setMake(e.value)
                            //query firestore to find models for selected make
                            fetchModels(db, e.value).then(
                                (value) => {
                                    //format the data to display in dropdown
                                    const modelsArray = arrayToDropdown(value)
                                    //save to dropdown list
                                    setModels(modelsArray)}
                                )
                            setModel("")
                            setYear("")
                        }
                    }}
                    />
                </div>
                <div   
                style={{margin: "2%", flex: 2}}>
                    <Select 
                    options={models}
                    placeholder="Model"
                    onChange={(e) => {
                        // if you change the model, refresh the years dropdown
                        if (e !== null) { console.log(e.value)
                        setModel(e.value)
                        fetchYears(db, make, e.value).then(
                            (value) => {
            
                                const yearsArray = arrayToDropdown(value)
                                
                                setYears(yearsArray)}
                            )
                            setYear("")
                        }
                    
                    }}/>
                </div>
                <div   
                style={{margin: "2%", flex: 2}}>
                    <Select 
                    options={years}
                    placeholder="Year"
                    onChange={(e) => {
                        if (e !== null) { console.log(e.value)
                        setYear(e.value)}
                    }}
                    />
                </div>           
                <button
                style={{margin: "2%", flex: 2}}
                type="button"
                onClick={() => {
                    // on button press, get cars, then update redux store 
                        if (make !== "" && model !== "" && year !== "") {
                            console.log(make)
                            console.log(model)
                            console.log(year)
                            fetchCars(db, make, model, year).then((value) => {
                                console.log(value)
                            })
                        } else { 
                            alert("invalid make, model or year")
                            window.location.reload()}
                    }
                }
                
                > Go </button>
            </div>
        </form>
    )

}