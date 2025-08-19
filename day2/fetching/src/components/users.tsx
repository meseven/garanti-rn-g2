import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { UserItem } from "./item";
import axios, { isAxiosError } from "axios";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data: users_data } = await axios<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(users_data);

      const { data: posts_data } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users_data[0].id}`
      );
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    // axios<User[]>("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
    //     )
    //       .then((posts_response) => console.log(posts_response.data))
    //       .catch();

    //     setUsers(res.data);
    //   })
    //   .catch((err) => setError(err.message))
    //   .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
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
