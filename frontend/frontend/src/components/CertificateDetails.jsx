function CertificateDetails({ certificate }) {
  const isValid = certificate.status === "VALID";

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={badgeContainerStyle(isValid)}>
          {isValid ? "✅ Official Certificate Verified" : "❌ Invalid Certificate"}
        </div>

        <h2 style={{ margin: "16px 0 8px 0" }}>{certificate.name}</h2>
        <p style={{ color: "#666", margin: "0 0 24px 0", fontSize: "14px" }}>
          ID: <strong>{certificate.certificate_id}</strong>
        </p>

        <div style={infoGridStyle}>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Programme</span>
            <span style={valueStyle}>{certificate.programme}</span>
          </div>

          <div style={infoItemStyle}>
            <span style={labelStyle}>Department</span>
            <span style={valueStyle}>{certificate.department}</span>
          </div>

          <div style={infoItemStyle}>
            <span style={labelStyle}>Duration</span>
            <span style={valueStyle}>{certificate.start_date} – {certificate.end_date}</span>
          </div>

          <div style={infoItemStyle}>
            <span style={labelStyle}>Verification Status</span>
            <span style={{ ...valueStyle, color: isValid ? "#16a34a" : "#dc2626", fontWeight: "bold" }}>
              {certificate.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  padding: "20px",
  fontFamily: "system-ui, -apple-system, sans-serif"
};

const cardStyle = {
  maxWidth: "520px",
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  padding: "32px",
  textAlign: "center",
  border: "1px solid #e2e8f0"
};

const badgeContainerStyle = (isValid) => ({
  backgroundColor: isValid ? "#dcfce7" : "#fee2e2",
  color: isValid ? "#15803d" : "#b91c1c",
  padding: "8px 16px",
  borderRadius: "9999px",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "14px"
});

const infoGridStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  textAlign: "left",
  marginTop: "16px",
  borderTop: "1px solid #f1f5f9",
  paddingTop: "16px"
};

const infoItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px"
};

const labelStyle = { color: "#64748b" };
const valueStyle = { color: "#0f172a", fontWeight: "500", textAlign: "right" };

export default CertificateDetails;