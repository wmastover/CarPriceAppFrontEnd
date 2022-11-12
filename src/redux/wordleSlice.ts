import { createSlice } from "@reduxjs/toolkit";


const initialState = ["w","o","r","d","s"]

export const wordleSlice = createSlice({

    name: "wordle",
    initialState: {
       value: initialState,
    },

    reducers: {
        newWordle: (state, action) => {
            //can write non immutable logic in createSlice, exception to rule
            
            state.value = action.payload
        },

    }
})


export const { newWordle } = wordleSlice.actions

export const wordleSliceReducer = wordleSlice.reducer