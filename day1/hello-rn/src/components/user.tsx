import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type IProps = {
  name: string;
  surname: string;
  age: number;
};

export function User(props: IProps) {
  const [data, setData] = useState(props);

  const { name, surname, age } = data;

  const increment = () => {
    setData((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{surname}</Text>
      <Text style={styles.text}>{age}</Text>

      <Button title="Yaşı Arttır" onPress={increment} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: "center",
  },
});
