import React, { useState, useEffect } from "react";
import Standings from "./Standings";
import { getStandings } from "../ducks/standings";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function SwitchStandings() {
  const { positionid } = useParams();
  const dispatch = useDispatch();
  const [table, setTable] = useState("overall");

  useEffect(() => {
    dispatch(getStandings(positionid));
  }, [positionid]);

  const standings = useSelector((state) => {
    return state.standings.standings;
  });

  return (
    <div>
      <h2 className="py-3 text-center text-xl font-bold">Standings</h2>
      <div class="flex justify-center rounded-md" role="group">
        <button
          type="button"
          class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => setTable("overall")}
        >
          Overall
        </button>
        <button
          type="button"
          class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => setTable("home")}
        >
          Home
        </button>
        <button
          type="button"
          class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => setTable("away")}
        >
          Away
        </button>
      </div>

      <div className="mt-6">
        <Standings
          leaguePosition={
            table === "home"
              ? standings[1]
              : table === "away"
              ? standings[2]
              : standings[0]
          }
        />
      </div>
    </div>
  );
}

export default SwitchStandings;
