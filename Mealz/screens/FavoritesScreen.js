import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
// import { useContext } from "react"

// import { FavoritesContext } from "../store/context/favorites-context"
import MealsList from "../components/MealsList/MealsList"
import { MEALS } from "../data/dummy-data"

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealsIds.includes(meal.id)
  )

  if (!favoriteMeals.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    )
  }

  return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
