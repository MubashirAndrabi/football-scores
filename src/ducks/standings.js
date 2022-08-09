import Axios from "axios";

const STANDINGS = "app/standings/STANDINGS";

export function setStandings(values) {
  return { type: STANDINGS, values };
}

export default function reducer(state = { standings: [] }, action) {
  switch (action.type) {
    case STANDINGS:
      return { ...state, standings: action.values };
    default:
      return state;
  }
}

export function getStandings(position) {
  return (dispatch, getState) => {
    Axios.get(
      "https://api.football-data.org/v2/competitions/" +
        position +
        "/standings",
      {
        headers: {
          // "X-Auth-Token": process.env.REACT_APP_API_KEY,
          "X-Auth-Token": "78c344381c794ce880b288d279bb81a0",
        },
      }
    )
      .then((response) => {
        dispatch(setStandings(response.data.standings));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
