import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { allScores } from "../ducks/scores";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import moment from "moment";

const plans = [
  {
    name: "Startup",
    priceMonthly: 29,
    priceYearly: 290,
    limit: "Up to 5 active job postings",
  },
  {
    name: "Business",
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: "Enterprise",
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AllScores() {
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState(plans[0]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const results = useSelector((store) => {
    return store.scores.results;
  });

  const teams = useSelector((store) => {
    return store.teams;
  });

  useEffect(() => {
    dispatch(allScores());
  }, []);

  // console.log(results);

  return (
    <div className="container mx-auto max-w-4xl h-screen overflow-scroll">
      {results.map((_) => {
        return (
          <div
            key={_.id}
            className="bg-black mt-1 mb-1 py-6 px-4 grid grid-cols-1 md:grid-cols-3 hover:bg-gray-800 cursor-pointer text-gray-100 content-center"
            onClick={() => navigate(`/currentmatch/${_.id}`)}
          >
            <div className="flex flex-row items-center md:justify-end justify-start gap-3">
              <h3>{_.homeTeam.name}</h3>
              <img
                class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={teams[_.homeTeam.id] && teams[_.homeTeam.id].crestUrl}
                alt="."
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="text-sm">{_.status}</h3>
              <h3 className="text-lg font-bold">
                {_.score.fullTime.homeTeam} - {_.score.fullTime.awayTeam}
              </h3>
              <h3 className="text-sm">
                {moment
                  .utc(_.utcDate)
                  .local()
                  .format("ddd MMM DD [at] HH:mm A")}
              </h3>
            </div>

            <div className="flex flex-row items-center justify-start gap-3">
              <img
                class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={teams[_.awayTeam.id] && teams[_.awayTeam.id].crestUrl}
                alt="."
              />
              <h3>{_.awayTeam.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllScores;
