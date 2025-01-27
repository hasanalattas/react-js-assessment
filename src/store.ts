import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices/rootReducer'

const store = configureStore({ reducer: rootReducer })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store
