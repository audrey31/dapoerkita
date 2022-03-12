import { useEffect, useState } from "react";
import Market from "../components/Market";
import Navbar from "../components/Navbar";
import CustomSearch from "../components/Search";
import SectionDivider from "../components/SectionDivider";
import "../styles/market.css";
import dapoerAPI from "../config/api";
import { useLocation } from "react-router-dom";

const MarketList = () => {
  const location = useLocation();
  console.log(location.state.teks);
  console.log(location.state.kategori);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://f191-125-166-13-9.ngrok.io/toko/search?${location.state.kategori}=${location.state.teks}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data.data);
        setIsLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="wrapper-market">
            <h1>Laper ya?</h1>
            <div className="wrapper-market-info">
              <SectionDivider title="Warung kami:" urlLink="" />
              {/* <Market title={data.data[0].Nama} funfact={data.data[0].Funfact} /> */}
              {data.map((dt) => (
                <Market
                  title={dt.nama}
                  funfact={dt.funfact}
                  key={dt.id}
                  marketID={dt.id}
                />
              ))}
              <Navbar />
            </div>
          </div>
        </>
      ) : (
        <h1>is loading...</h1>
      )}
    </>
  );
};

export default MarketList;
