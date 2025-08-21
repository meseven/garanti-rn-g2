import { useCallback, useMemo, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ChartsMemo } from "./charts";
import { IncrementMemo } from "./increment";

export function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  console.log("Counter component rendered");

  const data = useMemo(
    () => ({
      count,
    }),
    [count]
  );

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + amount);
  }, [amount]);

  return (
    <View>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Amount: {amount}</Text>
      <Button title="Increment" onPress={() => setCount(count + amount)} />

      <View style={{ flexDirection: "row" }}>
        <Button
          title="Amount +1"
          onPress={() => setAmount(1)}
          disabled={amount === 1}
        />
        <Button
          title="Amount +5"
          onPress={() => setAmount(5)}
          disabled={amount === 5}
        />
        <Button
          title="Amount +10"
          onPress={() => setAmount(10)}
          disabled={amount === 10}
        />
      </View>

      <ChartsMemo data={data} />
      <IncrementMemo increment={increment} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});
