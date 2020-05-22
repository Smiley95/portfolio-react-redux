import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/history/";

export function getHistory() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveHistory(historyAssetEvent) {
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(historyAssetEvent),
  })
    .then(handleResponse)
    .catch(handleError);
}
