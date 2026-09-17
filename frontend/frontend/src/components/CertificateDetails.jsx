import React from "react";

function CertificateDetails({ certificate }) {
  const isValid = certificate.status === "VALID";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Status Badge */}
        <div style={styles.badge(isValid)}>
          {isValid ? "✓ Official Certificate Verified" : "✕ Unverified / Invalid"}
        </div>

        {/* Certificate Title & Recipient */}
        <h2 style={styles.name}>{certificate.name}</h2>
        <p style={styles.subtext}>
          Certificate ID: <strong>{certificate.certificate_id}</strong>
        </p>

        {/* Detailed Metadata Grid */}
        <div style={styles.detailsGrid}>
          <div style={styles.row}>
            <span style={styles.label}>Programme</span>
            <span style={styles.value}>{certificate.programme}</span>
          </div>

          <div style={styles.row}>
            <span style={styles.label}>Department</span>
            <span style={styles.value}>{certificate.department}</span>
          </div>

          <div style={styles.row}>
            <span style={styles.label}>Duration</span>
            <span style={styles.value}>
              {certificate.start_date} – {certificate.end_date}
            </span>
          </div>

          <div style={styles.row}>
            <span style={styles.label}>Verification Status</span>
            <span
              style={{
                ...styles.value,
                color: isValid ? "#16a34a" : "#dc2626",
                fontWeight: "700"
              }}
            >
              {certificate.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
    padding: "24px",
    backgroundColor: "#f8fafc",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
  },
  card: {
    maxWidth: "520px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
    padding: "36px 28px",
    textAlign: "center",
    border: "1px solid #e2e8f0"
  },
  badge: (isValid) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: isValid ? "#dcfce7" : "#fee2e2",
    color: isValid ? "#15803d" : "#b91c1c",
    padding: "8px 18px",
    borderRadius: "9999px",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "20px"
  }),
  name: {
    margin: "0 0 6px 0",
    color: "#0f172a",
    fontSize: "24px",
    fontWeight: "700"
  },
  subtext: {
    color: "#64748b",
    margin: "0 0 28px 0",
    fontSize: "13px",
    fontFamily: "monospace"
  },
  detailsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    textAlign: "left",
    borderTop: "1px solid #f1f5f9",
    paddingTop: "20px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px"
  },
  label: {
    color: "#64748b",
    fontWeight: "500"
  },
  value: {
    color: "#0f172a",
    fontWeight: "600",
    textAlign: "right",
    maxWidth: "60%"
  }
};

export default CertificateDetails;