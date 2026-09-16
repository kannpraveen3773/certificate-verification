import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCertificate } from "../services/certificateApi";
import CertificateDetails from "../components/CertificateDetails";

function VerifyCertificate() {
  const { certificateId } = useParams();

  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const data = await getCertificate(certificateId);
        setCertificate(data);
      } catch (err) {
        setError("Certificate not found or invalid.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [certificateId]);

  if (loading) {
    return <h2>Verifying certificate...</h2>;
  }

  if (error) {
    return (
      <div>
        <h1>❌ Invalid Certificate</h1>
        <p>{error}</p>
        <p>Certificate ID: {certificateId}</p>
      </div>
    );
  }

  return <CertificateDetails certificate={certificate} />;
}

export default VerifyCertificate;