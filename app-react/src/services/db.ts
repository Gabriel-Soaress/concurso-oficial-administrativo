import { API_ENDPOINT } from "@/config/constants";

export interface DbQueryResponse<T = Record<string, unknown>> {
  rows?: T[];
  error?: string;
}

export async function dbQuery<T = Record<string, unknown>>(
  query: string,
  params: unknown[] = []
): Promise<DbQueryResponse<T>> {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`HTTP ${response.status}: ${errText || "Falha na API"}`);
  }

  return (await response.json()) as DbQueryResponse<T>;
}
