import { handleResponse, handleError } from "./apiUtils";
const baseUrlAsset = process.env.API_URL + "/assets/";

export function getAssets() {
  return fetch(baseUrlAsset).then(handleResponse).catch(handleError);
}

export function saveAsset(asset) {
  return fetch(baseUrlAsset + (asset.id || ""), {
    method: asset.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(asset),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAsset(id) {
  return fetch(baseUrlAsset + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
