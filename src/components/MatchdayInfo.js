import React from "react";

function MatchdayInfo(props) {
  // console.log(props);
  return (
    <>
      <img style={{ backgroundColor: "#52c41a" }} count={props.name} />

      <img count={"Matchday" + " " + props.current} />
    </>
  );
}

export default MatchdayInfo;
