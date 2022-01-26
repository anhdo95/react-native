import { StyleSheet, Text, View } from "react-native";

export default function CategoryMeals(props) {
  const { title } = props.route.params.category;

  return (
    <View style={styles.container}>
      <Text>{title} Screen</Text>
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
