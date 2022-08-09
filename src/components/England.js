import React, { useState, useEffect } from "react";

import Axios from "axios";

function England() {
  const [england, setEngland] = useState();

  useEffect(() => {
    Axios.get("https://api.football-data.org/v2/competitions/2021", {
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => {
        setEngland(
          response.data.seasons.map((item) => {
            return item;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(england)

  return England;
}

export default England;
