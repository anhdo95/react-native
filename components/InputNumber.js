import { StyleSheet, TextInput } from "react-native";

export default function InputNumber(props) {
  return (
    <TextInput
      {...props}
      style={[styles.container, props.style]}
      autoCorrect={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    borderRadius: 6,
  },
});
