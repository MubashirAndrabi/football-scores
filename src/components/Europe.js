import React, { useState, useEffect } from "react";
import Axios from "axios";

function Europe() {
  const [europe, setEurope] = useState();

  useEffect(() => {
    Axios.get("https://api.football-data.org/v2/competitions/2001", {
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => {
        setEurope(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(europe);

  return europe ? (
    <div>
      {/* <Row
        style={{ width: "100%", border: "1px solid grey", marginTop: "20px" }}
        justify="center"
        align="middle"
      >
        <Col span={6}>
          {" "}
          <Avatar
            size={150}
            shape="square"
            src={europe.emblemUrl}
          ></Avatar>{" "}
        </Col>

        <Col span={8}>
          {" "}
          <Typography strong={true}> {europe.name} </Typography>{" "}
        </Col>
        <Col span={4}>
          {" "}
          <Typography> {europe.currentSeason.startDate} </Typography>{" "}
        </Col>
        <Col span={2}> </Col>
        <Col span={4}>
          {" "}
          <Typography> {europe.currentSeason.endDate} </Typography>{" "}
        </Col>
      </Row>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={europe.seasons}
        renderItem={(item) => <List.Item>{item.startDate}</List.Item>}
      /> */}
      "Europe"
    </div>
  ) : null;
}

export default Europe;
