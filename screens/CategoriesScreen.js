import { StyleSheet, Text, View } from "react-native";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});