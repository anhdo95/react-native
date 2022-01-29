import { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableNativeFeedback,
} from "react-native";

import { MEALS } from "../data/dummy-data";

export default function CategoryMeals(props) {
  const { id } = props.route.params.category;
  const meals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(id)),
    [id]
  );

  const handlePress = (id) => () =>
    props.navigation.navigate("MealDetail", { id });

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback onPress={handlePress(item.id)}>
      <View style={styles.card}>
        <View style={styles.thumbnail}>
          <Image
            style={styles.image}
            source={{ uri: item.imageUrl }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id}
      data={meals}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    minWidth: 280,
    marginVertical: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 10,
    borderRadius: 6,
    elevation: 6,
  },
  thumbnail: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 10,
  },
  title: {
    textAlign: "center",
  },
});
