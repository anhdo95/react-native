import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { toggleFavorite, selectIsFavoriteMeal } from "../store/slices/meals";
import configs from "../configs";

export default function HeaderFavorite(props) {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const isFavoriteMeal = useSelector(selectIsFavoriteMeal(props.mealId));
  const iconName = isFavoriteMeal ? "star" : "star-outline";

  const handleFavorite = () =>
    dispatch(toggleFavorite({ mealId: props.mealId }));

  return (
    <Ionicons
      name={iconName}
      color={configs.color.accent}
      size={20}
      onPress={handleFavorite}
    />
  );
}
