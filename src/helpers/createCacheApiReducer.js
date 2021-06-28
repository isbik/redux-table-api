import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export default function createCacheApiReducer(name, options = {
  api: () => { },
}) {

  const fetchItems = createAsyncThunk(`${name}/fetchItems`, async ({ page = 0 }, { getState }) => {

    const { cached } = getState().passenger

    // cache has page with data return cached result
    if (cached[page]) return cached[page]

    const response = await options.api({ size: 10, page })
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

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      deleteCache: (state) => {
        state.cached = {}
      }
    },
    extraReducers: {
      [fetchItems.pending]: (state) => {
        state.loading = true
      },
      [fetchItems.fulfilled]: (state, action) => {
        const { totalPages: pages, data } = action.payload
        const { arg: { page } } = action.meta

        state.items = data
        state.pagination = { pages, page }
        state.loading = false
        state.cached = { ...state.cached, [page]: action.payload }
      },
      [fetchItems.rejected]: (state, action) => {
        state.error = action.error.message
      }
    }
  })

  return { reducer: { [name]: slice.reducer }, actions: { ...slice.actions, fetchItems } }
}