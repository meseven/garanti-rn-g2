import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { User } from "../../types/user";
import { useNavigate } from "../../hooks/useNavigate";
import { Ionicons } from "@expo/vector-icons";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../lib/key-factory";

type IProps = {
  user: User;
};

export function UserListItem({ user }: IProps) {
  const navigation = useNavigate();
  const queryClient = useQueryClient();

  const handleRemoveUser = () => {
    queryClient.setQueryData<User[]>(queryKeys.users.all, (oldData) => {
      if (!oldData) {
        return [];
      }
      return oldData.filter((u) => u.id !== user.id);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Detail", { userId: user.id })}
      >
        <Text style={styles.btnText}>{user.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemoveUser} style={{ padding: 10 }}>
        <Ionicons name="trash" size={20} color="#C96868" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
  },
});
