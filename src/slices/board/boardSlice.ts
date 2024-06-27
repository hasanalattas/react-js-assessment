import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Column } from 'utils/types'
import columns from 'constants/columns'

interface BoardState {
  columns: Column[]
}

const initialState: BoardState = {
  columns: columns
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardState(state, action: PayloadAction<{ columns: Column[] }>) {
      state.columns = action.payload.columns
    }
  }
})

export const { updateBoardState } = boardSlice.actions
export default boardSlice.reducer
