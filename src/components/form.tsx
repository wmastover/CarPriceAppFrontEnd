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

    //set placeholder value for makes
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
    }, [])

    


    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")



    return(
        <form 
            onSubmit={e => {
                e.preventDefault()
            } 
            }
        >
            <div style={{flexDirection: "row", display: "flex", marginInline:"5%",
            marginTop:"5%", marginBottom:0}}>
                <div   
                style={{margin: "2%", flex: 2}}>
                    <Select 
                    options={makes}
                    placeholder="Make"
                    onChange={(e) => {
                        // if you change the make, refresh the models dropdown
                        if (e !== null) { console.log(e.value)
                        setMake(e.value)
                        fetchModels(db, e.value).then(
                            (value) => {
            
                                const modelsArray = arrayToDropdown(value)
                                
                                setModels(modelsArray)}
                            )
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
                    console.log(make)
                    console.log(model)
                    console.log(year)
                    fetchCars(db, make, model, year).then((value) => {
                        console.log(value)
                    })
                    }}
                
                > Go </button>
            </div>
        </form>
    )

}