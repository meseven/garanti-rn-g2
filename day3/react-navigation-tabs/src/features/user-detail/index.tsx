import { Text, View } from "react-native";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUser } from "../../lib/query-functions";

type IProps = {
  userId: number;
};

export function UserDetail({ userId }: IProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}
