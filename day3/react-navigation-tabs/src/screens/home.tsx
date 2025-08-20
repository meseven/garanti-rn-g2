import { View } from "react-native";
import { UserList } from "../features/users";

export function UsersScreen() {
  return (
    <View style={{ flex: 1 }}>
      <UserList />
    </View>
  );
}
