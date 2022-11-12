import { configureStore } from '@reduxjs/toolkit'
import { rowsSliceReducer } from './rowsSlice'
import { wordleSliceReducer } from './wordleSlice'

export const store = configureStore({
  reducer: {
    rows: rowsSliceReducer,
    wordle: wordleSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>