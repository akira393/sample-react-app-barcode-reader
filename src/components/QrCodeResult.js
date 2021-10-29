import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
import { Result } from "@zxing/library";
import React, { FC, useEffect, useRef, useState } from "react";

const QrCodeResult = ({ qrCodes }) => {
  return (
    <div>
      {qrCodes.map((qr, i) => (
        <p>
          {i}: {qr}
        </p>
      ))}
    </div>
  );
};

export default QrCodeResult;
