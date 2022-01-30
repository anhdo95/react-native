import { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useAuth from "../hooks/useAuth";

export default function LoginScreen() {
  useAuth();
  const { replace } = useNavigation();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123");

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      AsyncStorage.setItem(
        "auth",
        JSON.stringify({
          token: "fake_token",
        })
      );
      replace("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          returnKeyType="next"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          keyboardType="numeric"
          returnKeyType="done"
          textContentType="password"
        />

        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 200,
    backgroundColor: "#fff",
  },
  options: {
    width: "80%",
    marginTop: 20,
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
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
