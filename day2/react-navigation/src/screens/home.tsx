import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { useNavigate } from "../hooks/useNavigate";

export function HomeScreen() {
  const navigation = useNavigate();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Button
        title="Mehmet"
        onPress={() => navigation.navigate("Detail", { id: 1, name: "Mehmet" })}
      />
      <Button
        title="Ayşe"
        onPress={() => navigation.navigate("Detail", { id: 2, name: "Ayşe" })}
      />
      <Button
        title="Fatma"
        onPress={() => navigation.navigate("Detail", { id: 3, name: "Fatma" })}
      />
    </View>
  );
}
