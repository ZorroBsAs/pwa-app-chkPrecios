import {
  DataCaptureContext,
  Camera,
  CameraSettings,
  DataCaptureView,
  configure
} from "scandit-web-datacapture-core";

import {
  barcodeCaptureLoader,
  BarcodeCapture,
  BarcodeCaptureSettings,
  Symbology
}
  from "scandit-web-datacapture-barcode";



export const startScanditScanner = async (containerRef, onDetected) => {

  await configure({
    licenseKey: "AoSXcgCZJxdqE5r5S+zK1I5EHqjiC0LJLC7MHkc3B58zOJz0nhxvkkhaBY6AcjEcuxbXkZFKPRcgfhmRsSIhC/1QZcZDY6HhOmNuuRIEsOLpMgnv6ze7YKdBFp6xaZO8KGr62Id1C9w+TmcfYnT1qd1//RS+f3tUOF4nTKBc0v4URWLbTEanTjsXw9/yV3SZ3lR/DLluO8jnbh0X5XOMRCREJf9fXJyNCGqhojIUoB/2dWx3yksTbHVE36sNVjY2NQ/3euFMKcGuQ2WW7HjrjbddmP6CYLp6tWNvZXZSuHqqaPnBjVGkW3gUw+MrW6Q0nEwt3xRMMh3Har/Hj1rpQ+tSoUTHNLZhtmqThhhCDB+nWYvpcVMYU5lGOR2YUmnkulBojbxE3c7rXkXUPzW99RViZtbpRWwS/h/x4xJDRE5faPS2S0dfpewXxJHjO+a3hHLeg3NaTYVZazn3a3xN1pJCn7rcSNxGh3vSjNI97KsfUxHLIkdt/twHLjKwW3JULml0bKZS8WZocdzMKAKFrmRC8TXtpPck7I1ZDbYfBgDThhHCj5uUGTMLCmQ9XQ9E6Ut/zIot0CyTziF3HFaDuoHjQUAQ1MG2VoNlGBx0QXDA/zaV5xfzxdLJWy69F5RvRsQTt45/v0kf2hmmLAwXTCvg77Wi7TctZfS84+LWjkewdcdDLoEiAlrGlYdVPfXIOGwV0N/oyFHtMjQ2bvjWrOm4+XopIqCpTXtZ5IjV2P55ytF/eMUbUyeTntu2SGllIAHAwysosxLs4s0uxiSfngSc9EHmwuepZK/pNTwnbHm1IMEZrd+988oG6IMI1XBfW0lJ5GmWki5AKjhSDAmIOW1qgB9dcgLMm3/9POAA26Wjs6bpup/oesPvX1hSKiVLzOys+JHCcWaBUXvz/nBcRKZ9gzYhovLrJtnItjGVMCvVzD0UskpnhpOb+LToAC//zhuyPTEYWy4C1gdTHAeOCR/Xbi+nu4Y4iyF6am2GRpDucXuBlj/WemEwj6G71i/ZHy9jeDctAF1+FPsbCyC4AvWu2J6clZUJUqY8xXBeMa9WC/WbcRKwIWxd3eFxoH11vWV7ndfbNf7M7bfyMvAlD8YjZBPN9oxG2TQhH0OTn8joHA9qdzHevpPFDPCHWSi0PEV8C1e2BVYtwkTkKupcLRMpx0nSNaav4IHykL93gdcm3mm3aViflK1NVj9BWLvnyPE=",
    libraryLocation: "/scandit/engine/",
    moduleLoaders: [barcodeCaptureLoader()],
  });

  const context = await DataCaptureContext.create();

  const view = await DataCaptureView.forContext(context);
  //view.connectToElement(containerRef.current); // Asegúrate de que containerRef es un ref válido a un elemento DOM
  view.connectToElement(containerRef);

  const camera = Camera.default;

  const cameraSettings = new CameraSettings();
  cameraSettings.preferredResolution = "hd";

  await camera.applySettings(cameraSettings);
  await context.setFrameSource(camera);

  const settings = new BarcodeCaptureSettings();
  settings.enableSymbologies([Symbology.EAN13UPCA]);
  settings.codeDuplicateFilter = 1000;

  //const barcodeCapture = BarcodeCapture.forContext(context, settings);

  // barcodeCapture.addListener({
  //   didScan: (mode, session) => {
  //     const barcode = session.newlyRecognizedBarcodes[0];
  //     if (barcode) {
  //       navigator.vibrate?.(100);
  //       onDetected(barcode.data);
  //     }
  //   }
  // });
  const barcodeCapture = await BarcodeCapture.forContext(context, settings);
  //console.log("barcodeCapture:", barcodeCapture);
  //console.log(Object.getPrototypeOf(barcodeCapture));
  context.addMode(barcodeCapture);

  const listener = {
    didScan: (barcodeCapture, session) => {
      const barcode = session.newlyRecognizedBarcodes[0];

      if (!barcode) return;

      navigator.vibrate?.(100);

      onDetected(barcode.data);

    }
  };

  barcodeCapture.addListener(listener);
 
  await camera.switchToDesiredState("on");

  return async () => {
    await barcodeCapture.setEnabled(false);
    await camera.switchToDesiredState("off");
    await context.dispose();
  };
};

