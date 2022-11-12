import React, { DetailedHTMLProps } from 'react';
import { useState } from 'react';
import Select from "react-select"

export const Form = () => {

 

    const [text, setText] = useState("")

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
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
                    options={options}
                    placeholder="Make"
                    onChange={(e) => {
                        if (e !== null) { console.log(e.value)}
                    }}
                    />
                </div>
                <div   
                style={{margin: "2%", flex: 2}}>
                    <Select 
                    options={options}
                    placeholder="Model"
                    onChange={(e) => {
                        if (e !== null) { console.log(e.value)}
                    }}
                    />
                </div>
                <div   
                style={{margin: "2%", flex: 2}}>
                    <Select 
                    options={options}
                    placeholder="Year"
                    onChange={(e) => {
                        if (e !== null) { console.log(e.value)}
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