const API_URL =
  "https://certificate-verification-4h7q.onrender.com/api/certificates";

export const getCertificate = async (certificateId) => {
  const response = await fetch(`${API_URL}/${certificateId}`);
  if (!response.ok) {
    throw new Error("Certificate not found");
  }

  return response.json();
};