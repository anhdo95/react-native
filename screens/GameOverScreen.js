import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from "react-native";

export default function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
});
