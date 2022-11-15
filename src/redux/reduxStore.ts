import { configureStore } from '@reduxjs/toolkit'
import { rowsSliceReducer } from './rowsSlice'

export const store = configureStore({
  reducer: {
    rows: rowsSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>