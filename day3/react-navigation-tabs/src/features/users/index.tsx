import { FlatList, Text } from "react-native";
import { UserListItem } from "./item";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../lib/query-functions";
import { Spinner } from "../../components/spinner";
import { ApiError } from "../../components/api-error";
import { queryKeys } from "../../lib/key-factory";

export function UserList() {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: queryKeys.users.all,
    queryFn: getUsers,
  });

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <ApiError error={error.message} />;
  }

  if (data?.length === 0) {
    return <Text>No users found</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <UserListItem user={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
