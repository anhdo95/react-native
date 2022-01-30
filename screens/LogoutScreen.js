import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const { replace } = useNavigation();

  useEffect(() => {
    AsyncStorage.removeItem("auth");
    replace("Login");
  }, []);

  return null;
}
