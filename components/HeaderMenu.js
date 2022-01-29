import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderMenu(props) {
  const { toggleDrawer } = useNavigation();
  return <Ionicons name="menu" size={24} onPress={toggleDrawer} />;
}

const styles = StyleSheet.create({});
