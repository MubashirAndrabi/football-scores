import Axios from "axios";
import moment from "moment";
const SCORES = "app/scores/SCORES";
const CURRENT_MATCH = "app/scores/CURRENT_MATCH";

export default function reducer(
  state = { results: [], liveScore: {} },
  action
) {
  switch (action.type) {
    case SCORES:
      return { ...state, results: action.values };
    case CURRENT_MATCH:
      return { ...state, liveScore: action.value };
    default:
      return state;
  }
}

export function scores(values) {
  return { type: SCORES, values };
}

export function currentMatch(value) {
  return { type: CURRENT_MATCH, value };
}

export function allScores() {
  return (dispatch, getState) => {
    const n = 5;
    const dateMnsFive = moment(new Date()).subtract(n, "day");
    const datePlusFive = moment(new Date()).add(n, "day");
    const startDate = dateMnsFive.format("YYYY-MM-DD");
    const endDate = datePlusFive.format("YYYY-MM-DD");

    Axios.get(
      `https://api.football-data.org/v2/matches?dateFrom=${startDate}&dateTo=${endDate}`,
      {
        headers: {
          // "X-Auth-Token": process.env.REACT_APP_API_KEY,
          "X-Auth-Token": "78c344381c794ce880b288d279bb81a0",
        },
      }
    )
      .then((response) => {
        const data = response.data.matches.map((item) => {
          return item;
        });

        dispatch(scores(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
