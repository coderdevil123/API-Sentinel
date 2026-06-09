const API_URL =
  "http://localhost:7000/api";

export async function getSessions() {

  const response =
    await fetch(
      `${API_URL}/sessions`,
      {
        cache: "no-store"
      }
    );

  return response.json();
}