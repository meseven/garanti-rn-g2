import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    const { fullname, email, password, confirmPassword } = form;
    alert(`${fullname}, ${email}, ${password}, ${confirmPassword}`);
  };

  const handleChange = (name: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Fullname</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          autoCapitalize="none"
          autoFocus
          value={form.fullname}
          onChangeText={(val) => handleChange("fullname", val)}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>E-mail address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your e-mail address"
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(val) => handleChange("email", val)}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          autoCapitalize="none"
          secureTextEntry
          value={form.password}
          onChangeText={(val) => handleChange("password", val)}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Retype your password"
          autoCapitalize="none"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={(val) => handleChange("confirmPassword", val)}
        />
      </View>

      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  item: {
    marginBottom: 12,
  },
  label: {
    fontSize: 22,
    fontWeight: 500,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#999",
    fontSize: 22,
    width: "100%",
  },
});
