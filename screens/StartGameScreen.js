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
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import InputNumber from "../components/InputNumber";

export default function StartGameScreen(props) {
  const [number, setNumber] = useState();
  const [selectedNumber, setSelectedNumber] = useState();

  const handleReset = () => {
    setNumber("");
  };

  const handleConfirm = () => {
    const value = parseInt(number);

    if (isNaN(value)) {
      return Alert.alert("Oops!", "The number has to be between 1 - 100", [
        { text: "Ok", style: "destructive", onPress: handleReset },
      ]);
    }

    setSelectedNumber(number);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>Enter a number!</Text>
            <InputNumber
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={setNumber}
              value={number}
            />
            <View style={styles.actions}>
              <View style={styles.action}>
                <Button title="Reset" onPress={handleReset} />
              </View>
              <View style={styles.action}>
                <Button title="Confirm" onPress={handleConfirm} />
              </View>
            </View>
          </Card>

          {!!selectedNumber && (
            <Card style={styles.selectedCard}>
              <Text>You selected</Text>
              <View style={styles.selectedNumberBox}>
                <Text style={styles.selectedNumber}>{selectedNumber}</Text>
              </View>
              <Button title="Start Game" onPress={props.onStart} />
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    width: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    width: 60,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
  },
  action: {
    width: Dimensions.get("window").width / 3,
    maxWidth: 120,
    marginHorizontal: "1%",
  },
  selectedCard: {
    alignItems: "center",
    marginTop: 14,
  },
  selectedNumberBox: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#cf26aa",
    borderRadius: 6,
  },
  selectedNumber: {
    padding: 6,
  },
});
