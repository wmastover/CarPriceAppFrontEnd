// update redux store
import { createSlice } from "@reduxjs/toolkit";
import { params } from "../type/data";

const initialState = {} as params
export const paramsSlice = createSlice({

    name: "params",
    initialState: {
       value: initialState,
    },

    reducers: {
        changeParams: (state, action) => {
            //can write non immutable logic in createSlice, exception to rule
            console.log("change params", action.payload)
            state.value =  action.payload
        },

        clear: state => {
            // test this
            state.value = initialState
        },
    }
})

export const { changeParams, clear} = paramsSlice.actions

export const paramsSliceReducer = paramsSlice.reducer