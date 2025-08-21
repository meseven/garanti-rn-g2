import React from "react";
import { StyleSheet, Text, View } from "react-native";

type IProps = {
  data: {
    count: number;
  }
};

export function Charts({ data }: IProps) {
  console.log("Charts component rendered", data);

  const randomArray = Array.from({ length: data.count }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <View style={styles.container}>
      <Text>Charts</Text>
      <Text>Random Array: {JSON.stringify(randomArray)}</Text>
    </View>
  );
}

export const ChartsMemo = React.memo(Charts);

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
