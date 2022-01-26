import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen(props) {
  const handlePress = (category) => () =>
    props.navigation.navigate("CategoryMeals", { category });

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback onPress={handlePress(item)}>
      <View style={[styles.category, { backgroundColor: item.color }]}>
        <Text>{item.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 150,
  },
});
