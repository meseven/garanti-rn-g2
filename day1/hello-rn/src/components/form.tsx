import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || surname.trim() === "") {
      return;
    }

    alert(`${name} ${surname}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="isminizi girin..."
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="soyisminizi girin..."
        value={surname}
        onChangeText={setSurname}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.btnText}>Gönder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 12,
    padding: 8,
    fontSize: 28,
    width: "100%",
    marginBottom: 8,
  },
  button: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#666",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#efefef",
  },
  btnText: {
    fontSize: 24,
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
});
