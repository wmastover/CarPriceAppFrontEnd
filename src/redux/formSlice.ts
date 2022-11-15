import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    makes: [],
    models: [],
    years: []
    
}

export const formSlice = createSlice({

    name: "form",
    initialState: {
       value: initialState,
    },

    reducers: {
        changeMakes: (state, action) => {
            //can write non immutable logic in createSlice, exception to rule
            console.log("add row", action.payload)
            state.value.makes = action.payload
            // state.value = [...state.value, action.payload]
        },
        // change models

        // change years

        clear: state => {
            // test this
            state.value = initialState
        },
    }
})

// export const { addRow, clear} = rowsSlice.actions

// export const rowsSliceReducer = rowsSlice.reducer