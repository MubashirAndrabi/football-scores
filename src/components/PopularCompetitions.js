import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { competition } from "../ducks/competitions";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PopularCompetitions() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const popularLeagues = useSelector((store) => {
    return store.competitions.leagues;
  });

  useEffect(() => {
    dispatch(competition());
  }, []);

  return (
    <>
      <div className="bg-black shadow overflow-scroll h-screen sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {popularLeagues.map((_) => (
            <li key={_.id}>
              <div
                onClick={() => navigate(`/standings/${_.id} `)}
                className="block hover:bg-gray-800 cursor-pointer"
              >
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="font-medium text-gray-50 truncate">
                          {_.name}
                        </p>
                        <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                          {/* {_.department} */}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="flex overflow-hidden -space-x-1">
                        <img
                          className="w-10 h-10 rounded-full p-1 bg-white"
                          src={_.area.ensignUrl}
                          alt={_.code}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PopularCompetitions;
