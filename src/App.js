import React from "react";
import "./App.css";
import AllScores from "./components/AllScores";
import PopularCompetitions from "./components/PopularCompetitions";
import { Routes, Route } from "react-router-dom";
import CurrentMatch from "./components/CurrentMatch";
import Europe from "./components/Europe";
import England from "./components/England";
import SwitchStandings from "./components/SwitchStandings";
import News from "./components/News";
import TeamInfo from "./components/TeamInfo";

function App() {
  return (
    <>
      <div className="container max-w-8xl mx-auto relative min-h-screen flex flex-col">
        {/* 3 column wrapper */}
        <div className="flex-grow w-full  xl:px-8 lg:flex pt-10">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 xl:flex">
            <div className=" xl:flex-shrink-0 xl:w-96 ">
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="h-full relative" style={{ minHeight: "12rem" }}>
                  <PopularCompetitions />
                </div>
                {/* End left column area */}
              </div>
            </div>

            <div className=" lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                <div className="relative h-full" style={{ minHeight: "36rem" }}>
                  <Routes>
                    <Route
                      path="/currentmatch/:matchid"
                      element={<CurrentMatch />}
                    />

                    <Route path="/" exact element={<AllScores />} />
                    <Route path="/team-info/:id" element={<TeamInfo />} />
                    <Route
                      path="/standings/:positionid"
                      element={<SwitchStandings />}
                    />

                    <Route path="/europe" element={<Europe />} />

                    <Route path="/england" element={<England />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>

          <div className=" pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              <div className="h-full relative" style={{ minHeight: "16rem" }}>
                <News />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
