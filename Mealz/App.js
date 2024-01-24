import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"

import CategoriesScreen from "./screens/CategoriesScreen"
import MealzOverviewScreen from "./screens/MealzOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import FavoritesScreen from "./screens/FavoritesScreen"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='ios-restaurant'
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name='ios-star'
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

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
          <Stack.Screen
            name='Home'
            component={DrawerNavigator}
            options={{ headerShown: false, title: "Home" }}
          />
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
