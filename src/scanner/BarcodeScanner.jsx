import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";

import { getPlatform } from "./platform";

import { startScanner } from "./scannerEngine";

const BarcodeScanner = forwardRef(({ onDetected }, ref) => {
  const videoRef = useRef(null);
  const scanditRef = useRef(null);
  const stopScannerRef = useRef(null);

  const startCamera = async () => {
    const platform = getPlatform();

    if (platform === "ios" || platform === "android") {
      // stopScannerRef.current = await startScanner(
      //   scanditRef.current,
      //   onDetected
      // );

      stopScannerRef.current = await startScanner(
        scanditRef.current,
        (code) => {
          onDetected(code);           // le aviso al padre
          stopCamera();               // cierro scanner
        }
      );
    } else {
      stopScannerRef.current = await startScanner(
        videoRef.current,
        onDetected
      );
    }
  };

  const stopCamera = () => {
    if (stopScannerRef.current) {
      stopScannerRef.current();
      stopScannerRef.current = null;
    }
    if (scanditRef.current) {
    scanditRef.current.innerHTML = "";  
  }
  };

  useImperativeHandle(ref, () => ({
    startCamera,
    stopCamera
  }));

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", display: "none" }}
      />

      <div
        ref={scanditRef}
        style={{ width: "100%", height: "100vh" }}
      />
    </>
  );
});

export default BarcodeScanner;
