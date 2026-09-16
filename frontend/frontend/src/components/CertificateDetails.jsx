function CertificateDetails({ certificate }) {
  return (
    <div className="certificate-card">
      <div className="verified-badge">
        ✓ Certificate Verified
      </div>

      <h1>Certificate Details</h1>

      <div className="details">
        <div>
          <span>Certificate ID</span>
          <strong>{certificate.certificate_id}</strong>
        </div>

        <div>
          <span>Name</span>
          <strong>{certificate.name}</strong>
        </div>

        <div>
          <span>Department</span>
          <strong>{certificate.department}</strong>
        </div>

        <div>
          <span>Programme</span>
          <strong>{certificate.programme}</strong>
        </div>

        <div>
          <span>Start Date</span>
          <strong>{certificate.start_date}</strong>
        </div>

        <div>
          <span>End Date</span>
          <strong>{certificate.end_date}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{certificate.status}</strong>
        </div>
      </div>
    </div>
  );
}

export default CertificateDetails;