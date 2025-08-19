import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Register } from "./src/components/register";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RegisterRHF } from "./src/components/register-rhf";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <Register /> */}
        <RegisterRHF />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
