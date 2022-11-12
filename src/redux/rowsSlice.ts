import { createSlice } from "@reduxjs/toolkit";
import { row } from "../type/data"


const initialState = Array<row>(0)

export const rowsSlice = createSlice({

    name: "rows",
    initialState: {
       value: initialState,
    },

    reducers: {
        addRow: (state, action) => {
            //can write non immutable logic in createSlice, exception to rule
            console.log("add row", action.payload)
            state.value = [...state.value, action.payload]
        },

        clear: state => {
            // test this
            state.value = initialState
        },
    }
})

export const { addRow, clear} = rowsSlice.actions

export const rowsSliceReducer = rowsSlice.reducer