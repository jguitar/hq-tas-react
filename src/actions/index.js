import API from "../api";

export function getContributorsUnassigned() {
  const request = API.get(`/contributors/unassigned.json?site_id=${process.env.REACT_APP_SITE_ID}`).then(response => response.data);

  return {
    type: "GET_CONTRIBUTORS_UNASSIGNED",
    payload: request,
  };
}

export function getSiteFullInfo() {
  const request = API.get(`/sites/${process.env.REACT_APP_SITE_ID}/full.json`).then(response => response.data);

  return {
    type: "GET_SITE_FULL_INFO",
    payload: request,
  };
}

export function getBusinessUnits() {
  const request = API.get("/business_units.json").then(response => response.data);

  return {
    type: "GET_BUSINESS_UNITS",
    payload: request,
  };
}
