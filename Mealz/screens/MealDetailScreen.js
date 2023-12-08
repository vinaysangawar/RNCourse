import { View, Text, StyleSheet } from "react-native"

import { MEALS } from "../data/dummy-data"

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const meal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View style={styles.container}>
      <Text>{meal.title}</Text>
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
