
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const BarcodeScanner = forwardRef(({ onDetected }, ref) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const detectorRef = useRef(null);
  const scanned = useRef(false);
  const rafRef = useRef(null);

  const stopCamera = () => {
    scanned.current = false;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const scanLoop = async () => {
    if (!videoRef.current || scanned.current) return;

    try {
      const barcodes = await detectorRef.current.detect(videoRef.current);

      if (barcodes.length > 0 && !scanned.current) {
        scanned.current = true;
        onDetected(barcodes[0].rawValue);
        stopCamera();
        return;
      }
    } catch (err) {
      console.error("Barcode detection error:", err);
    }

    rafRef.current = requestAnimationFrame(scanLoop);
  };

  const startCamera = async () => {
    scanned.current = false;

    if (!("BarcodeDetector" in window)) {
      alert("BarcodeDetector no soportado en este dispositivo.");
      return;
    }
    /* formats: [
        "ean_13",
        "ean_8",
        "code_128",
        "code_39",
        "qr_code",
        "upc_a",
        "upc_e"
      ]*/
    detectorRef.current = new window.BarcodeDetector({
      formats: [
        "ean_13"
        
      ]
    });

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } }
      });

      streamRef.current = stream;
      videoRef.current.srcObject = stream;

      await videoRef.current.play();
      scanLoop();
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    startCamera,
    stopCamera
  }));

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", height: "auto" }}
      muted
      playsInline
    />
  );
});

export default BarcodeScanner;

