import React, { DetailedHTMLProps } from 'react';
import { useState } from 'react';
import Select from "react-select"

export const Form = () => {

 

    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")

    const makes = [
        { value: 'Ford', label: 'Ford' },
      ]

    const models = [
    { value: 'Fiesta', label: 'Fiesta' },
    { value: 'Focus', label: 'Focus' },
    ]

    const years = [
    { value: '2015', label: '2015' },
    { value: '2010', label: '2010' },    
    ]


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
                        if (e !== null) { console.log(e.value)
                        setMake(e.value)
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
                        if (e !== null) { console.log(e.value)
                        setModel(e.value)}
                    }}
                    />
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
                onClick={() => {console.log("Go buttomn pressed")}}
                
                > Go </button>
            </div>
        </form>
    )

}