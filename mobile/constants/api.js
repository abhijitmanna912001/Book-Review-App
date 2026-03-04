import { Platform } from "react-native";

const DEV_MACHINE = "http://localhost:3000";
const ANDROID_EMULATOR = "http://10.0.2.2:3000";

export const API_URL =
  Platform.OS === "android" ? ANDROID_EMULATOR : DEV_MACHINE;
