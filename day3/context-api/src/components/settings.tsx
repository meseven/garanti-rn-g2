import { StyleSheet, Text, View } from "react-native";
import { useLang } from "../context/lang.context";
import { useTheme } from "../context/theme.context";
import { useSettings } from "../store/useSettings";

export function Settings() {
  const lang = useSettings((state) => state.lang);
  const theme = useSettings((state) => state.theme);

  return (
    <View>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.text}>Active Lang: {lang}</Text>
      <Text style={styles.text}>Active Theme: {theme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
});
