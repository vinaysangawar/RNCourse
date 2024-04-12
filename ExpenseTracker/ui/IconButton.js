import { Pressable, View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function IconButton({ name, size, color, style, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons
          name={name}
          size={size}
          color={color}
          style={style}
          onPress={onPress}
        />
      </View>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
})
