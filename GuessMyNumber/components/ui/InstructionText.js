import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText(props) {
  const { children, style } = props;

  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
    textAlign: "center",
  },
});
