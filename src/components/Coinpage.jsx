import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { SingleCoin } from "../config/api";
import { useTheme } from "@mui/material/styles";
import CoinInfo from "./CoinInfo";
import "../styles/Coinpage.css";
import { LinearProgress, Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "./Banner/Carousel";


const Coinpage = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();
  const theme = useTheme();
  const { currency, symbol } = CryptoState();
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setcoin(data);
  };
  useEffect(() => {
    fetchCoin();
  }, []);
  console.log(coin);
  if(!coin) return <LinearProgress style={{backgroundColor: "gold"}}/>;

  return (
    <div
      className="container"
      // style={{
      //   display: "flex",
      //   // flexDirection: "column",
      //   [theme.breakpoints.down("md")]: {
      //     flexDirection: "column",
      //     alignItems: "center",
      //   },
      // }}
    >
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
          }}
        >
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          <div className="market-data">
            <span>
              <Typography variant="h5">
                Rank: &nbsp;
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span>
              <Typography variant="h5">
                Current Price: &nbsp;
                {symbol}{" "}{numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
              </Typography>
            </span>
            <span>
              <Typography variant="h5">
                Market Cap: &nbsp;
                {symbol}{" "}{numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6))} M
              </Typography>
            </span>
          </div>
        </Typography>
      </div>
      <CoinInfo />
    </div>
  );
};

export default Coinpage;
