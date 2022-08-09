import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./Standings.css";

function Standings({ leaguePosition: standings }) {
  console.log(standings);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className=" py-3.5 px-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Crest
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Team
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Played
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Won
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Drawn
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Lost
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        GF
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        GA
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        GD
                      </th>
                      <th
                        scope="col"
                        className=" px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {standings ? (
                      standings.table?.map((_) => (
                        <tr
                          key={_.position}
                          className="divide-x divide-gray-200"
                        >
                          <td className=" py-2 pl-3 pr-3 text-sm text-gray-500 text-center">
                            {_.position}
                          </td>
                          <td className="px-4 py-2 text-sm font-medium text-gray-500 text-center">
                            <img
                              src={_.team.crestUrl}
                              alt={_.team.name}
                              className="h-5 w-5"
                            />
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 tracking-tighter">
                            {_.team.name}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.playedGames}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.won}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.draw}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.lost}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.goalsFor}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.goalsAgainst}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.goalDifference}
                          </td>
                          <td className=" px-2 py-2 text-sm text-gray-500 text-center">
                            {_.points}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div className="p-6">
                        No data available at the moment.
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Standings;
