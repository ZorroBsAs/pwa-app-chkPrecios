import { getPlatform } from "./platform";
import { startAndroidScanner } from "./engines/androidNative";
import { startScanditScanner } from "./engines/scanditEngine";
import { startZxingScanner } from "./engines/zxingEngine";

export const startScanner = async (videoRef, onDetected) => {
  const platform = getPlatform();

  if (platform === "ios") {
    return startScanditScanner(videoRef, onDetected);
  }

  if (platform === "android" && "BarcodeDetector" in window) {
    /*return startScanditScanner(videoRef, onDetected);*/
    return startAndroidScanner(videoRef, onDetected);
  }

  return startZxingScanner(videoRef, onDetected);
};
