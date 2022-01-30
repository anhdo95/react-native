import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default useAuth = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    try {
      const auth = JSON.parse(AsyncStorage.getItem("auth"));

      if (auth.token) {
        navigate("Home");
      }
    } catch (error) {}
  }, []);
};
