import { Text, StyleSheet, Platform } from "react-native";

function Title(props) {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
  },
});
