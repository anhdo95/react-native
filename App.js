import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};


export default function App() {
  const [startable, setStartable] = useState(false);
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const handleStart = () => {
    setStartable(true);
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Header title="Guess a Number" />
        {startable ? <GameScreen /> : <StartGameScreen onStart={handleStart} />}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
