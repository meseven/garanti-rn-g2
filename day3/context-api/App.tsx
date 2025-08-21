import { StyleSheet, View } from "react-native";
import { Settings } from "./src/components/settings";
import { LangContextProvider } from "./src/context/lang.context";
import { ChangeLang } from "./src/components/change-lang";
import { ThemeContextProvider } from "./src/context/theme.context";
import { ChangeTheme } from "./src/components/change-theme";
import { UndoRedo } from "./src/components/undo-redo";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeContextProvider>
        <LangContextProvider>
          <UndoRedo />
          <Settings />
          <ChangeTheme />
          <ChangeLang />
        </LangContextProvider>
      </ThemeContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
