import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Carousel from "./Carousel";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url(./banner2.jpg)",
      }}
    >
      <Container
        style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingTop: 25,
          justifyContent: "space-around",
        }}
      >
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              marginTop: 0,
              fontFamily: "Montserrat",
            }}
          >
            Crypto-Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat"
            }}
          >
            get all the info regarding your favourite crypto currency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
}

export default Banner;
