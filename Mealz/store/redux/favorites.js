import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload.id)
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter((mealId) => mealId !== action.payload.id)
    },
  },
})

const { actions, reducer } = favoritesSlice

export const { addFavorite, removeFavorite } = actions
export default reducer
