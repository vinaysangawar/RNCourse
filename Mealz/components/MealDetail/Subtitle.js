import { Text, StyleSheet } from "react-native"

function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 4,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
})
