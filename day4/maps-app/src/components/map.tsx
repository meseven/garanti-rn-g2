import { AppleMaps, GoogleMaps } from "expo-maps";
import { useEffect, useState } from "react";
import { Platform, Text } from "react-native";
import * as Location from "expo-location";

export function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        cameraPosition={{
          zoom: 12,
          coordinates: {
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
          },
        }}
        markers={[
          {
            title: "Mehmet",
            coordinates: {
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
            },
          },
          {
            title: "Çanakkale Boğazı",
            coordinates: {
              latitude: 40.195815,
              longitude: 26.408107,
            },
          },
        ]}
        polylines={[
          {
            coordinates: [
              {
                latitude: 37.9152809,
                longitude: 29.1120212,
              },
              {
                latitude: 40.195815,
                longitude: 26.408107,
              },
              {
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
              },
            ],
          },
        ]}
      />
    );
  }

  if (Platform.OS === "android") {
    return <GoogleMaps.View style={{ flex: 1 }} />;
  }

  return <Text>Maps are only available on Android and iOS</Text>;
}
