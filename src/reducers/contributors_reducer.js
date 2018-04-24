export default function (state = {}, action) {
  switch (action.type) {
    case "GET_CONTRIBUTORS_UNASSIGNED":
      return { ...state, unassigned: action.payload };

    case "GET_BUSINESS_UNITS":
      return { ...state, business_units: action.payload };

    default:
      return state;
  }
}
