import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleAdd = (goal) => {
    setGoals((originalGoals) => [
      ...originalGoals,
      { id: Math.random(), goal },
    ]);
    setVisible(false)
  };

  const handleDelete = (id) => () => {
    setGoals((originalGoals) => originalGoals.filter((goal) => goal.id !== id));
  };

  const handleCancel = () => setVisible(false)

  return (
    <View style={styles.container}>
      <View>
        <Button title="Add Goal" onPress={() => setVisible(true)} />
      </View>
      <View style={styles.inner}>
        <GoalInput visible={visible} onCancel={handleCancel} onAdd={handleAdd} />
        <FlatList
          data={goals}
          renderItem={(data) => (
            <GoalItem {...data.item} onPress={handleDelete(data.item.id)} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  inner: {
    maxWidth: "80%",
  },
});
