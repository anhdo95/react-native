import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import configs from "../configs";

export default function FilterSwitch(props) {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: configs.color.accent }}
        thumbColor="#fff"
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
