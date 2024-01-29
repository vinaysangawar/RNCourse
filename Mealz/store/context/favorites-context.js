import { createContext, useState } from "react"

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavoriteHandler = (id) => {
    setFavoriteMealIds((prev) => [...prev, id])
  }

  const removeFavoriteHandler = (id) => {
    setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id))
  }

  const context = {
    ids: favoriteMealIds,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  }

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
