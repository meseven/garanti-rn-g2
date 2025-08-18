import { StyleSheet, View } from "react-native";
import { Posts } from "./src/components/posts";

export default function App() {
  // return React.createElement(
  //   View,
  //   { style: styles.container },
  //   React.createElement(Paragraph)
  // );

  return (
    <View style={styles.container}>
      {/* <Paragraph>
        <Text>React Native</Text>
      </Paragraph>
    */}
      {/* <User name="Mehmet" surname={"Seven"} age={32} /> */}

      <Posts
        data={[
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
          { id: 3, title: "Post 3" },
        ]}
      />

      {/* <Counter initial={5} /> */}
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
