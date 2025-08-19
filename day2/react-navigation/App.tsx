import * as React from "react";
import { View, Text } from "react-native";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home";
import { DetailScreen } from "./src/screens/detail";
import { RootStackParamList } from "./src/types/navigation";
import { LogoTitle } from "./src/components/logo-title";
import { Button } from "@react-navigation/elements";

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Anasayfa",
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <Button variant="plain" onPress={() => alert("This is a button!")}>
            Info
          </Button>
        ),
        headerLeft: () => (
          <Button variant="plain" onPress={() => alert("This is a button!")}>
            Other
          </Button>
        ),
      },
    },
    Detail: {
      screen: DetailScreen,
      options: ({ route }) => ({
        title: route.params.name,
      }),
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
