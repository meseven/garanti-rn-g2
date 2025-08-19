import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { useNavigate } from "../hooks/useNavigate";

export type DetailScreenProps = StaticScreenProps<RootStackParamList["Detail"]>;

export function DetailScreen({ route }: DetailScreenProps) {
  const navigation = useNavigate();
  const { id } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Text>ID: {id}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}
