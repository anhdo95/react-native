import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { selectMealById } from "../store/selectors/meals";

export default function MealDetailScreen(props) {
  const meal = useSelector(selectMealById(props.route.params.id));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.thumbnail}>
          <Image
            style={styles.image}
            source={{ uri: meal.imageUrl }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {meal.title}
          </Text>
          {meal.ingredients.map((ingredient) => (
            <View key={ingredient}>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: "80%",
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
    padding: 20,
  },
  title: {
    fontFamily: 'open-sans-bold',
    marginBottom: 15
  },
});
