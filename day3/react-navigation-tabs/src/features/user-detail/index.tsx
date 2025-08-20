import { Button, Text, View } from "react-native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../../lib/query-functions";
import { Spinner } from "../../components/spinner";
import { ApiError } from "../../components/api-error";
import { User } from "../../types/user";
import { queryKeys } from "../../lib/key-factory";

type IProps = {
  userId: number;
};

export function UserDetail({ userId }: IProps) {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: queryKeys.users.detail(userId),
    queryFn: () => getUser(userId),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ApiError error={error.message} />;
  }

  const handleEdit = () => {
    queryClient.setQueryData<User>(
      queryKeys.users.detail(userId),
      (oldData) => {
        if (!oldData) {
          return;
        }

        return {
          ...oldData,
          name: "Updated Name",
        };
      }
    );
  };

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <Button title="Edit" onPress={handleEdit} />
      <Button
        title={isFetching ? "Fetching..." : "Refetch"}
        onPress={() => refetch()}
        disabled={isFetching}
      />
    </View>
  );
}
