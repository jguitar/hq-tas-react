import axios from "axios";

export function getContributorsUnassigned() {
  const request = axios.get("/contributors/unassigned.json").then(response => response.data);

  return {
    type: "GET_CONTRIBUTORS_UNASSIGNED",
    payload: request,
  };
}

export function getBusinessUnits() {
  const request = axios.get("/business_units.json").then(response => response.data);

  return {
    type: "GET_BUSINESS_UNITS",
    payload: request,
  };
}
