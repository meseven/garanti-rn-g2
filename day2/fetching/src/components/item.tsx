import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { User } from "./users";

type IProps = {
  user: User;
};

export function UserItem({ user }: IProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{user.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  item: {
    padding: 8,
  },
  text: {
    fontSize: 22,
  },
});
