import Axios from "axios";
import { getTeams } from "./teams";

const POPULAR_COMPETITIONS = "app/competitions/popularCompetitions";

export default function reducer(state = { leagues: [] }, action) {
  switch (action.type) {
    case POPULAR_COMPETITIONS:
      return { ...state, leagues: action.values };
    default:
      return state;
  }
}

export function popularCompetitions(values) {
  return { type: POPULAR_COMPETITIONS, values };
}

export function competition() {
  return (dispatch, getState) => {
    Axios.get("https://api.football-data.org/v2/competitions?plan=TIER_ONE", {
      headers: {
        // "X-Auth-Token": process.env.REACT_APP_API_KEY,
        "X-Auth-Token": "78c344381c794ce880b288d279bb81a0",
      },
    })
      .then((response) => {
        const data = response.data.competitions.map((item) => {
          return item;
        });

        dispatch(popularCompetitions(data));

        const areas = data.map((item) => item.area.id);

        if (!Object.keys(getState().teams).length) {
          dispatch(getTeams(areas));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
