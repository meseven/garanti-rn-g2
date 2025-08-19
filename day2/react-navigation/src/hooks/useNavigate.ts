import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

export function useNavigate() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigation;
}
