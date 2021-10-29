import { BrowserAztecCodeReader, BrowserCodeReader, BrowserMultiFormatOneDReader, BrowserMultiFormatReader, BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
import React, {  useEffect, useRef } from "react";

const QrCodeReader = ({ onReadQRCode }) => {
  const controlsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const codeReader = new BrowserMultiFormatOneDReader();
    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (result, error, controls) => {
        if (error) {
          return;
        }
        if (result) {
          onReadQRCode(result);
        }
        controlsRef.current = controls;
      }
    );
    return () => {
      if (!controlsRef.current) {
        return;
      }

      controlsRef.current.stop();
      controlsRef.current = null;
    };
  }, [onReadQRCode]);

  return (
    <video
      style={{ maxWidth: "100%", maxHeight: "100%", height: "100%" }}
      ref={videoRef}
    />
  );
};

export default QrCodeReader;
