import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/cfops";

export function getCfops() {
  return fetch(baseUrl + "?_sort=codigo&_order=asc")
    .then(handleResponse)
    .catch(handleError);
}

export function getCfopByCode(code) {
  return fetch(baseUrl + "?codigo=" + code)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((cfops) => {
        if (cfops.length !== 1) throw new Error("Cfop not found: " + code);
        return cfops[0];
      });
    })
    .catch(handleError);
}

export function getCfopByTerm(term) {
  return fetch(baseUrl + "?q=" + term)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((cfops) => {
        if (cfops.length !== 1) throw new Error("Cfop not found: " + term);
        return cfops[0];
      });
    })
    .catch(handleError);
}

export function saveCfop(cfop) {
  let message = {
    method: cfop.id ? "PUT" : "POST", // POST for create, PUT to update when id already exist
    headers: { "content-type": "application/json" },
    body: JSON.stringify(cfop),
  };
  return fetch(baseUrl + "/" + (cfop.id || ""), message)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCfop(cfopId) {
  return fetch(baseUrl + "/" + cfopId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
