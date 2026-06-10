const API_URL =
  "http://localhost:7000/api";

export async function getSession(
  scanId: string
) {

  const response =
    await fetch(
      `${API_URL}/sessions/${scanId}`,
      {
        cache: "no-store"
      }
    );

  return response.json();
}