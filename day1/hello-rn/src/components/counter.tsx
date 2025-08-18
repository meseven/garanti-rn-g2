import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type IProps = {
  initial?: number;
};

export function Counter({ initial = 0 }: IProps) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },
});
