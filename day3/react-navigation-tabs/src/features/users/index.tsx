import { FlatList } from "react-native";
import { UserListItem } from "./item";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUsers } from "../../lib/query-functions";

export function UserList() {
  const { data } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <UserListItem user={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
