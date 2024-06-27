import { combineReducers } from 'redux'
import boardSlice from 'slices/board/boardSlice'

// Define the shape of the root state
export type RootState = ReturnType<typeof rootReducer>

// Combine the reducers into a root reducer
export const rootReducer = combineReducers({
  board: boardSlice
})
