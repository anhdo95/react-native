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
} from "react-native";

import GameOverScreen from "./GameOverScreen";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber === exclude
    ? generateRandomNumber(min, max)
    : randomNumber;
};

export default function GameScreen(props) {
  const [number, setNumber] = useState(
    generateRandomNumber(1, 100, props.selectedNumber)
  );

  const handleLower = () => {
    setNumber(generateRandomNumber(1, number, props.selectedNumber));
  };

  const handleHigher = () => {
    setNumber(generateRandomNumber(number, 100, props.selectedNumber));
  };

  return <GameOverScreen />;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>{number}</Text>
      </Card>
      <View>
        <Button title="LOWER" onPress={handleLower} />
        <Button title="HIGHER" onPress={handleHigher} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
});
