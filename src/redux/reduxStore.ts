import { configureStore } from '@reduxjs/toolkit'
import { rowsSliceReducer } from './rowsSlice'
import { paramsSliceReducer } from "./paramsSlice"

export const store = configureStore({
  reducer: {
    rows: rowsSliceReducer,
    params: paramsSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>