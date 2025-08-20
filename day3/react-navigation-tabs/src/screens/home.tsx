import { Text, View } from "react-native";
import { UserList } from "../features/users";
import { Suspense } from "react";
import { Spinner } from "../components/spinner";

export function UsersScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Suspense fallback={<Spinner />}>
        <UserList />
      </Suspense>
    </View>
  );
}
