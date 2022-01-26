import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 15,
  },
});
