import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { UserItem } from "./item";
import { useFetch } from "../hooks/useFetch";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function Users() {
  const { data, loading, error } = useFetch("/users");

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
