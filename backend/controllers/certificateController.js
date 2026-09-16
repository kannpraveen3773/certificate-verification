const certificates = require("../models/certificateModel");

const getCertificate = (req, res) => {
  const { certificateId } = req.params;

  const certificate = certificates.find(
    cert => cert.certificate_id === certificateId
  );

  if (!certificate) {
    return res.status(404).json({
      message: "Certificate not found",
      status: "INVALID"
    });
  }

  res.json(certificate);
};

module.exports = {
  getCertificate
};