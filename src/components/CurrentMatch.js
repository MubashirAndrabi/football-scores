import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { currentMatch } from "../ducks/scores";
import { allScores } from "../ducks/scores";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CurrentMatch() {
  const navigate = useNavigate();
  const { matchid: teamId } = useParams();

  const dispatch = useDispatch();

  const results = useSelector((store) => {
    return store.scores.results;
  });
  const teams = useSelector((store) => {
    return store.teams;
  });

  const match = results.find((item) => {
    return item.id == teamId;
  });

  useEffect(() => {
    if (!results.length) {
      dispatch(allScores());
    }
  }, []);

  return match ? (
    <>
      <div className="bg-white px-4 py-5 border rounded-md border-gray-500 sm:px-6 flex gap-4">
        <div>
          <img
            className="inline-block h-14 w-14 rounded-full border border-gray-500"
            src={match?.competition?.area?.ensignUrl}
            alt="country flag"
          />
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {match.competition.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {match?.competition?.area?.name}
          </p>
        </div>
      </div>
      <div className="mt-1 bg-white px-4 py-5 border rounded-md border-gray-500 sm:px-6 grid gap-4 grid-cols-3 justify-items-center place-items-center">
        <div
          onClick={() =>
            navigate(`/team-info/${match.homeTeam.id}`, {
              state: match.homeTeam.id,
            })
          }
          className="cursor-pointer"
        >
          <img
            className="inline-block h-2/3 w-full "
            src={teams[match.homeTeam.id].crestUrl}
            alt="club crest"
          />
          <h3 className="text-center mt-3 font-semibold text-xl tracking-tight">
            {match.homeTeam.name}
          </h3>
        </div>
        <div className="place-items-center text-center">
          <div
            className={classNames(
              match.status === "FINISHED"
                ? "bg-green-700"
                : match.status === "SCHEDULED"
                ? "bg-red-600"
                : "bg-orange-600",
              "py-2 px-3 rounded-full animate-pulse text-gray-50 font-medium"
            )}
          >
            {match.status}
          </div>
          <div className="text-xl font-medium mt-3">
            {match?.score?.fullTime?.homeTeam} -{" "}
            {match?.score?.fullTime?.awayTeam}{" "}
          </div>
          <h3 className="text-sm mt-3">
            {moment
              .utc(match.utcDate)
              .local()
              .format("ddd MMM DD [at] HH:mm A")}
          </h3>
        </div>
        <div
          onClick={() =>
            navigate(`/team-info/${match.awayTeam.id}`, {
              state: match.homeTeam.id,
            })
          }
          className="cursor-pointer"
        >
          <img
            className="inline-block h-2/3 w-full "
            src={teams[match.awayTeam.id].crestUrl}
            alt="club crest"
          />
          <h3 className="text-center mt-3 font-semibold text-xl tracking-tight">
            {match.awayTeam.name}
          </h3>
        </div>
      </div>
      <div className="mt-1 bg-white px-4 py-5 border rounded-md border-gray-500 sm:px-6">
        <h3 className="text-xl font-medium">Match Details: </h3>
        <div className="mt-3 flex flex-col gap-2">
          <p className="font-medium">
            <b>Half-Time Score: </b>
            <span className="text-xl">
              {match.score.halfTime.homeTeam} - {match.score.halfTime.awayTeam}
            </span>
          </p>
          <p className="font-medium">
            <b>Full-Time Score: </b>
            <span className="text-xl">
              {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}
            </span>
          </p>
        </div>
        <div class="divide-y divide-dashed divide-gray-500 mt-3">
          <p className="font-medium">
            <b>Referee: </b>
            <span className="text-md">{match.referees[0].name}</span>
          </p>
        </div>
      </div>
    </>
  ) : null;
}

export default CurrentMatch;
