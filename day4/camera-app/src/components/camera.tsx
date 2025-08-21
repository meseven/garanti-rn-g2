import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as MediaLibrary from "expo-media-library";

export default function Camera() {
  const camera = useRef<CameraView | null>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [torch, setTorch] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePhoto() {
    if (permissionResponse?.status !== "granted") {
      await requestMediaPermission();
    }

    const photo = await camera.current?.takePictureAsync();

    if (!photo?.uri) {
      return;
    }

    await MediaLibrary.saveToLibraryAsync(photo?.uri);
  }

  function toggleTorch() {
    setTorch(!torch);
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={camera}
        enableTorch={torch}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.takePhotoBtn} onPress={takePhoto} />
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleTorch}>
            <Text style={styles.text}>
              {torch ? "Disable Torch" : "Enable Torch"}
            </Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  takePhotoBtn: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 50,
    borderWidth: 6,
    borderColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
