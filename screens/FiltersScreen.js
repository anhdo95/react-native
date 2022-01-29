import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import configs from "../configs";

import FilterSwitch from "../components/FilterSwitch";

export default function FiltersScreen() {
  const [isGlueFree, setIsGlueFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Text style={styles.heading}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Glue Free"
          value={isGlueFree}
          onChange={setIsGlueFree}
        />
        <FilterSwitch
          label="Vegan"
          value={isVegan}
          onChange={setIsVegan}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
  },
  options: {
    width: "80%",
    marginTop: 20
  },
  heading: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
