import { createSlice } from "@reduxjs/toolkit";
import { row } from "../type/data"


const initialState = Array<row>(0)

export const rowsSlice = createSlice({

    name: "rows",
    initialState: {
       value: initialState,
    },

    reducers: {

        changeRows: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { changeRows} = rowsSlice.actions

export const rowsSliceReducer = rowsSlice.reducer