import React from "react";
import { Button } from "react-native";

type IProps = {
  increment: () => void;
};

export function Increment({ increment }: IProps) {
  console.log("Increment component rendered");
  return <Button title="Increment" onPress={increment} />;
}


export const IncrementMemo = React.memo(Increment);