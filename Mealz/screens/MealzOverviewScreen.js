import { View, FlatList, StyleSheet } from "react-native"

import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"
import { useLayoutEffect } from "react"

const MealzOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }

    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealzOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
