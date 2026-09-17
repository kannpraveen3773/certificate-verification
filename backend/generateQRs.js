const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");
const certificates = require("./models/certificateModel");

const BASE_URL = "https://certificate-verificate.netlify.app/verify";
const OUTPUT_DIR = path.join(__dirname, "generated_qr_codes");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateVerificationQRs() {
  console.log(`Generating instant-scan QR codes for ${certificates.length} certificates...`);

  for (const cert of certificates) {
    // Pure URL enables seamless 1-tap browser launching
    const verificationUrl = `${BASE_URL}/${cert.certificate_id}`;
    const filePath = path.join(OUTPUT_DIR, `${cert.certificate_id}.png`);

    try {
      await QRCode.toFile(filePath, verificationUrl, {
        width: 350,
        margin: 2,
        errorCorrectionLevel: "H",
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      });
      console.log(`Generated: ${cert.certificate_id}.png -> ${cert.name}`);
    } catch (err) {
      console.error(`Failed generating QR for ${cert.certificate_id}:`, err);
    }
  }

  console.log(`\nComplete! QR codes saved in: ${OUTPUT_DIR}`);
}

generateVerificationQRs();