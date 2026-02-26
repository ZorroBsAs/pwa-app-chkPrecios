
import { BrowserMultiFormatReader } from "@zxing/browser";

export const startZxingScanner = async (videoElement, onDetected) => {
  let codeReader = new BrowserMultiFormatReader();
  let scanned = false;  


  const stop = () => {
    scanned = false;
    codeReader.reset();
    if (videoElement && videoElement.srcObject) {
      const tracks = videoElement.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoElement.srcObject = null;
    }
  };
  const onScan = (result) => {
    if (result && !scanned) {
      scanned = true;
      navigator.vibrate?.(100);
        onDetected(result.text);
        stop();
    }
  }

  try {
    await codeReader.decodeFromConstraints(
      { video: { facingMode: { ideal: "environment" } } },
      videoElement,
      onScan
    );
  } catch  {
    const devices = await BrowserMultiFormatReader.listVideoInputDevices();
    if(!devices.length) return;

    const back = devices.find(d =>
      d.label.toLowerCase().includes("back") ||
      d.label.toLowerCase().includes("rear") ||
      d.label.toLowerCase().includes("environment")
    );
    const deviceId = back ? back.deviceId : devices[0].deviceId;

    await codeReader.decodeFromVideoDevice(
      deviceId,
      videoElement,
      onScan
    );
  }
};


/*
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";


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

export default BarcodeScanner;*/