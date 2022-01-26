import { StyleSheet, Text, View, Button } from "react-native";

export default function CategoriesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
      <Button title="Category Meals" onPress={() => props.navigation.navigate('CategoryMeals')} />
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
