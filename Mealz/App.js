import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoriesScreen from "./screens/CategoriesScreen"
import MealzOverviewScreen from "./screens/MealzOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"

const Stack = createNativeStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#A49393",
    primary: "#FFFFFF",
    text: "#FFFFFF",
    card: "#A49393",
    border: "rgb(9, 9, 9)",
    notification: "rgb(255, 59, 48)",
  },
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name='Categories' component={CategoriesScreen} />
          <Stack.Screen name='Overview' component={MealzOverviewScreen} />
          <Stack.Screen name='Meal Details' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
