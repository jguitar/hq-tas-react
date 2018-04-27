export default function (state = {}, action) {
  switch (action.type) {
    case "GET_CONTRIBUTOR":
      return { ...state, contributor: action.payload };
    default:
      return state;
  }
}
