import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const BarcodeScanner = forwardRef(({ onDetected }, ref) => {
  const videoRef = useRef(null);
  const codeReader = useRef(null);
  const scanned = useRef(false);

  const getBackCameraId = async () => {
    const devices = await BrowserMultiFormatReader.listVideoInputDevices();
    if (!devices.length) return null;

    const back = devices.find(d =>
      d.label.toLowerCase().includes("back") ||
      d.label.toLowerCase().includes("rear") ||
      d.label.toLowerCase().includes("environment")
    );

    return back ? back.deviceId : devices[0].deviceId;
  };

  const onScan = (result) => {
  console.log("onScan called:", result);
  if (result && !scanned.current) {
    scanned.current = true;
    onDetected(result.text); // ✅ use .text
    stopCamera(); // stops camera safely
    
  }
};

const stopCamera = () => {
  if (codeReader.current) {
    codeReader.current.reset(); // optional for older versions
  }
  if (videoRef.current && videoRef.current.srcObject) {
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
  }
};

  const startCamera = async () => {
    scanned.current = false;
    codeReader.current = new BrowserMultiFormatReader();

    try {
      // ✅ Mejor compatibilidad móvil
      await codeReader.current.decodeFromConstraints(
        { video: { facingMode: { ideal: "environment" } } },
        videoRef.current,
        onScan
      );
    } catch {
      // 🔁 Fallback
     // const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      const deviceId = await getBackCameraId();

      await codeReader.current.decodeFromVideoDevice(
        deviceId,
        videoRef.current,
        onScan
      );
    }
  };

  //  EXPONEMOS FUNCIONES AL PADRE
  useImperativeHandle(ref, () => ({
    startCamera,
    stopCamera
  }));

   return (
    <video
      ref={videoRef}
      style={{ width: "100%", height: "auto" }}
      muted
      playsInline  // 🔥 CLAVE para iOS
    />
  );
});

export default BarcodeScanner;


