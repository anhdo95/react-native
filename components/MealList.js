import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealList(props) {
  const { navigate } = useNavigation();

  const handlePress = (id) => () => navigate("MealDetail", { id });

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
      data={props.meals}
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
