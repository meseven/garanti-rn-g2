import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type IProps = {
  data: { id: number; title: string }[];
};

export function Posts({ data }: IProps) {
  const [posts, setPosts] = useState(data);

  const addPost = () => {
    setPosts((prev) => [
      ...prev,
      { id: prev.length + 1, title: `Post ${prev.length + 1}` },
    ]);
  };

  const handleRemove = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <View>
      <Button title="Ekle" onPress={addPost} />

      {/* {posts.length === 0 ? (
        <Text>Henüz gönderi yok.</Text>
      ) : (
        <Text>Toplam: {posts.length}</Text>
      )} */}

      <Text>
        {posts.length === 0 ? "Henüz gönderi yok" : `Toplam: ${posts.length}`}
      </Text>

      {posts.map((post) => (
        <View key={post.id}>
          <Text style={styles.text}>{post.title}</Text>
          <Button title="Sil" onPress={() => handleRemove(post.id)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: "center",
  },
});
