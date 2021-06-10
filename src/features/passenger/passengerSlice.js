import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPassengers } from '../../services/passenger';

export const fetchPassengers = createAsyncThunk('passenger/fetchPassengers', async ({ page = 0 }, { getState }) => {

  const { cached } = getState().passenger
  // cache has page with data return cached result
  if (cached[page]) return cached[page]

  const response = await getPassengers({ size: 10, page })
  return response.data
})

const initialState = {
  pagination: {
    pages: 1,
    page: 1,
  },
  cached: {},

  items: [],
  loading: false,
  error: false,
}


export const passengerSlice = createSlice({
  name: 'passenger',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPassengers.pending]: (state) => {
      state.loading = true
    },
    [fetchPassengers.fulfilled]: (state, action) => {
      const { totalPages: pages, data } = action.payload
      const { arg: { page } } = action.meta

      state.items = data
      state.pagination = { pages, page }
      state.loading = false
      state.cached = { ...state.cached, [page]: action.payload }

    },
    [fetchPassengers.rejected]: (state, action) => {
      state.error = action.error.message
    }
  }
})






export default passengerSlice.reducer