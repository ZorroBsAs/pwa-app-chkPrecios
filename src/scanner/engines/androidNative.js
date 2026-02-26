export const startAndroidScanner = async (videoElement, onDetected) => {
  let stream = null;
  let rafId = null;
  let scanned = false;

  if (!("BarcodeDetector" in window)) {
    alert("BarcodeDetector no soportado en este dispositivo.");
    return;
  }

  const detector = new window.BarcodeDetector({
    formats: ["ean_13"]
  });

  const stop = () => {
    scanned = false;

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }

    if (videoElement) {
      videoElement.srcObject = null;
    }
  };

  const scanLoop = async () => {
    if (!videoElement || scanned) return;

    try {
      const barcodes = await detector.detect(videoElement);

      if (barcodes.length > 0 && !scanned) {
        scanned = true;
        navigator.vibrate?.(100);
        onDetected(barcodes[0].rawValue);
        stop();
        return;
      }
    } catch (err) {
      console.error("Barcode detection error:", err);
    }

    rafId = requestAnimationFrame(scanLoop);
  };

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } }
    });

    videoElement.srcObject = stream;
    await videoElement.play();
    scanLoop();
  } catch (err) {
    console.error("Camera error:", err);
  }

  return stop; 
};
