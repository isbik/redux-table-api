import { configureStore } from '@reduxjs/toolkit'
import passengerReducer from '../features/passenger/passengerSlice'

export default configureStore({
  reducer: {
    passenger: passengerReducer
  }
})