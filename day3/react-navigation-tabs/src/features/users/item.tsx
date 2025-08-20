import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { User } from "../../types/user";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { useNavigate } from "../../hooks/useNavigate";

type IProps = {
  user: User;
};

export function UserListItem({ user }: IProps) {
  const navigation = useNavigate();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Detail", { userId: user.id })}
      >
        <Text style={styles.btnText}>{user.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  btn: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
  },
});
