import { Button, StyleSheet, Text, View } from "react-native";
import { useSettings } from "../store/useSettings";

export function ChangeTheme() {
  const theme = useSettings((state) => state.theme);
  const setTheme = useSettings((state) => state.setTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change Theme</Text>
      <Text style={styles.text}>Active Theme: {theme}</Text>

      <Button
        title="dark"
        onPress={() => setTheme("dark")}
        disabled={theme === "dark"}
      />
      <Button
        title="light"
        onPress={() => setTheme("light")}
        disabled={theme === "light"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
});
