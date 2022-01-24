import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import classNames from "classnames";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");

  const handleAdd = () => {
    props.onAdd(goal);
    setGoal("");
  };

  const handleCancel = () => {
    props.onCancel();
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Enter your goal"
            value={goal}
            onChangeText={setGoal}
          />
        </View>
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={handleCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
  input: {
    width: 300,
    marginBottom: 5,
    padding: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  actions: {
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
  button: {
    width: "30%",
  },
});
