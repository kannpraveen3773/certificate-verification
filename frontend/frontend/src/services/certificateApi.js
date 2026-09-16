const API_URL = "http://localhost:5000/api/certificates";

export const getCertificate = async (certificateId) => {
  const response = await fetch(`${API_URL}/${certificateId}`);

  if (!response.ok) {
    throw new Error("Certificate not found");
  }

  return response.json();
};