import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarketView from "../components/MarketView";

const MarketDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [menu, setMenu] = useState([]);
  const [funfact, setFunfact] = useState(null);
  const [rating, setRating] = useState(null);
  const [komen, setKomen] = useState([]);
  const [idToko, setIdToko] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://f191-125-166-13-9.ngrok.io/toko/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setMenu(response.data.data.menu);
        setFunfact(response.data.data.funfact.teks);
        setData(response.data.data);
        setRating(response.data.data.rating);
        setKomen(response.data.data.komentar);
        setIdToko(response.data.data.id);
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
          <MarketView
            toko={data.nama}
            menu={menu}
            funfact={funfact}
            rating={rating}
            komentar={komen}
            idToko={idToko}
          />
        </>
      ) : (
        <h1>is loading...</h1>
      )}
    </>
  );
};

export default MarketDetail;
