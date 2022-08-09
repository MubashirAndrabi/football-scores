import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  LocationMarkerIcon,
  AtSymbolIcon,
  PhoneIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import "./TeamInfo.css";

import { TypeAnimation } from "react-type-animation";

function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center gap-10 bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <p>
        <LocationMarkerIcon className="h-6 w-6" />
      </p>
      <p>
        <AtSymbolIcon className="h-6 w-6" />
      </p>
      <p>
        <PhoneIcon className="h-6 w-6" />
      </p>
      <p>
        <GlobeIcon className="h-6 w-6" />
      </p>
    </div>
  );
}

const TeamInfo = () => {
  //   const { state: id } = useLocation();

  const { id } = useParams();

  const allTeams = useSelector((state) => {
    return state.teams;
  });

  const currentTeam = allTeams[id];

  function BackOfCard() {
    return (
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-black transition-all z-10 card-back text-sm">
        <TypeAnimation
          cursor={false}
          sequence={[
            `Address: ${currentTeam.address}`,
            2000,
            `Email: ${currentTeam.email}`,
            2000,
            `Phone: ${currentTeam.phone}`,
            2000,
            `Website: ${currentTeam.website}`,
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>
    );
  }

  return (
    <div>
      <div class="flex items-center justify-center bg-black mt-10 p-10">
        <div class="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 drop-shadow-2xl">
          <div class="-mb-20 -translate-y-1/2 transform">
            <img
              src={currentTeam.crestUrl}
              alt="Team Info"
              class="mx-auto h-52"
            />
          </div>
          <div class="text-center">
            <h3 class="text-center text-4xl font-bold">{currentTeam.name}</h3>
            <p class="text-sm">Also known as {currentTeam.shortName}</p>
            <span class="text-md">{currentTeam.area.name}</span>
          </div>
          <ul class="mt-16 mb-20 flex justify-center text-center ">
            <li class="flex flex-col">
              <span class="font-bold text-lg">Founded</span>{" "}
              <p className="text-sm">{currentTeam.founded}</p>
            </li>
            <li class="mx-6 flex flex-col">
              <span class="font-bold text-lg">Colors</span>{" "}
              <p className="text-sm"> {currentTeam.clubColors} </p>
            </li>
            <li class="flex flex-col">
              <span class="font-bold text-lg">Venue</span>
              <p className="text-sm">{currentTeam.venue}</p>
            </li>
          </ul>
          <div class="text-center">
            <div className="relative w-full h-24 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              <FrontOfCard />
              <BackOfCard />
            </div>
          </div>
          {/* <div className="text-center h-24">
            <SocialForTeam
              address={currentTeam.address}
              phone={currentTeam.phone}
              email={currentTeam.email}
              website={currentTeam.website}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
