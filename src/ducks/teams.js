import Axios from "axios";

const LOAD_TEAMS = "app/teams/LOAD_TEAMS";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    default:
      return state;
  }
}
export function getTeams(areas) {
  return (dispatch) => {
    Axios.get("https://api.football-data.org/v2/teams?areas=" + areas.join(), {
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    }).then((response) => {
      const teams = {};

      response.data.teams.forEach((team) => {
        teams[team.id] = team;
      });

      dispatch({ type: LOAD_TEAMS, teams });
    });
  };
}
