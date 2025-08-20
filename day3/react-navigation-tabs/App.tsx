import * as React from "react";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UsersScreen } from "./src/screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserDetailScreen } from "./src/screens/users-detail";
import { ProfileScreen } from "./src/screens/profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomeStack = createNativeStackNavigator({
  screens: {
    Users: UsersScreen,
    Detail: UserDetailScreen,
  },
});

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeStack,
      options: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons name="home" size={24} color={focused ? "blue" : "gray"} />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "blue" : "gray" }}>Home</Text>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: ({ focused }) => (
          <Ionicons name="person" size={24} color={focused ? "blue" : "gray"} />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "blue" : "gray" }}>Profile</Text>
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    Profile: ProfileScreen,
    Detail: UserDetailScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

// query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 5000,
      gcTime: 5000,
      // throwOnError: true,
      retry: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
