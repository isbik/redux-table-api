import { createSlice } from '@reduxjs/toolkit'



export default function createCacheApiReducer(name, options) {

  const initialState = {
    pagination: {
      pages: 1,
      page: 1,
    },
    cached: {},

    items: [],
    loading: false,
    error: false,

    count: 1
  }

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      increment(state) {
        state.count += 1
      }
    },
  })

  return { [name]: slice.reducer }
}