import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.goal}>
        <Text key={props.id}>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#999",
  },
});
