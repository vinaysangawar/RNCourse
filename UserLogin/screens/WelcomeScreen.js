import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { AuthContext } from "../store/auth-context"

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState(null)

  const authCtx = useContext(AuthContext)

  useEffect(() => {
    axios
      .get(
        `https://react-native-course-a5c7c-default-rtdb.firebaseio.com/message.json?auth=${authCtx.token}`
      )
      .then((response) => {
        console.log(response.data)
        setFetchedMessage(response.data)
      })
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
})