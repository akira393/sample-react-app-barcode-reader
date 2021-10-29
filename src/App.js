import React, { useState } from "react";
import QrCodeReader from "./components/QrCodeReader";
import QrCodeResult from "./components/QrCodeResult";

function App() {
  const [qrCodes, setQrCodes] = useState([]);

  return (
    <div className="App">
      <QrCodeReader
        onReadQRCode={(result) => {
          setQrCodes((codes) => {
            return [result.getText(), ...codes];
          });
        }}
      />
      <QrCodeResult qrCodes={qrCodes} />
    </div>
  );
}

export default App;
