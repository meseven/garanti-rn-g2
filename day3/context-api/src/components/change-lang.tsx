import { Button, StyleSheet, Text, View } from "react-native";
import { useSettings } from "../store/useSettings";

export function ChangeLang() {
  const lang = useSettings((state) => state.lang);
  const setLang = useSettings((state) => state.setLang);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change Language</Text>
      <Text style={styles.text}>Active Lang: {lang}</Text>

      <Button
        title="tr-TR"
        onPress={() => setLang("tr-TR")}
        disabled={lang === "tr-TR"}
      />
      <Button
        title="en-US"
        onPress={() => setLang("en-US")}
        disabled={lang === "en-US"}
      />
      <Button
        title="de-DE"
        onPress={() => setLang("de-DE")}
        disabled={lang === "de-DE"}
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
