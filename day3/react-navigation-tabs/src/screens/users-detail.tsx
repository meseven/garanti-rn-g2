import { StaticScreenProps } from "@react-navigation/native";
import { View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { UserDetail } from "../features/user-detail";

export type DetailScreenProps = StaticScreenProps<RootStackParamList["Detail"]>;

export function UserDetailScreen({ route }: DetailScreenProps) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <UserDetail userId={userId} />
    </View>
  );
}
