import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/ncms";

export function getNcms() {
  return fetch(baseUrl + "?_sort=codigo&_order=asc")
    .then(handleResponse)
    .catch(handleError);
}

export function getNcmByCode(code) {
  return fetch(baseUrl + "?codigo=" + code)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((ncms) => {
        if (ncms.length !== 1) throw new Error("Ncm not found: " + code);
        return ncms[0];
      });
    })
    .catch(handleError);
}

export function getNcmByTerm(term) {
  return fetch(baseUrl + "?q=" + term)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((ncms) => {
        if (ncms.length !== 1) throw new Error("Ncm not found: " + term);
        return ncms[0];
      });
    })
    .catch(handleError);
}

export function saveNcm(ncm) {
  let message = {
    method: ncm.id ? "PUT" : "POST", // POST for create, PUT to update when id already exist
    headers: { "content-type": "application/json" },
    body: JSON.stringify(ncm),
  };
  return fetch(baseUrl + "/" + (ncm.id || ""), message)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteNcm(ncmId) {
  return fetch(baseUrl + "/" + ncmId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
