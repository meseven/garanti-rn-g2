import { Image, Text, View } from "react-native";

export function LogoTitle() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <Image
        style={{ width: 40, height: 40 }}
        source={{
          uri: "https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Watermelon.png",
        }}
      />

      <Text style={{ fontWeight: "bold", color: "black" }}>My App</Text>
    </View>
  );
}
