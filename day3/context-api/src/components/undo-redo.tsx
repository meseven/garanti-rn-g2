import { Button, StyleSheet, View } from "react-native";
import { useSettings } from "../store/useSettings";

export function UndoRedo() {
  const { undo, redo, clear } = useSettings.temporal.getState();

  return (
    <View style={styles.container}>
      <Button title="Undo" onPress={() => undo()} />
      <Button title="Redo" onPress={() => redo()} />
      <Button title="Clear" onPress={() => clear()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
