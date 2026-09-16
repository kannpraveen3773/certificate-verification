import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyCertificate from "./pages/VerifyCertificate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/verify/:certificateId"
          element={<VerifyCertificate />}
        />

        <Route
          path="*"
          element={
            <div>
              <h1>Certificate Verification System</h1>
              <p>Scan a certificate QR code to verify.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;