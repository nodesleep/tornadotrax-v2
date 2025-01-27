import type { TornadoQuery, Tornado } from "../types/";

export const fetchTornados = async (
  query: TornadoQuery
): Promise<Tornado[]> => {
  const response = await fetch("http://localhost:3000/api/tornado", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tornado data");
  }

  return response.json();
};

export const fetchDefaultQuery = async (): Promise<any> => {
  const response = await fetch(
    "http://localhost:3000/api/tornado/superoutbreak"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch default query");
  }

  return response.json();
};
