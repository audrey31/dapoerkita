import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useAuth } from "../config/Auth";
import { Button } from "@mui/material";

const RateUs = ({ idToko }) => {
  const { authToken } = useAuth();
  const [rating, setRating] = useState(2);
  const [message, setMessage] = useState("");
  console.log(typeof rating);
  console.log(rating);

  const handleOnClick = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = { rating: rating };

    var config = {
      method: "post",
      url: `https://f191-125-166-13-9.ngrok.io/toko/${idToko}/rating`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setMessage("Rating berhasil ditambahkan");
        console.log(response.data.data);
      })
      .catch(function (error) {
        setMessage("Rating gagal, coba lagi lain waktu");
        console.log(error);
      });
  };

  return (
    <>
      <div className="wrapper-rating">
        <Stack spacing={1}>
          <Rating
            name="size-large"
            defaultValue={0}
            onChange={(e) => setRating(parseInt(e.target.value))}
            size="large"
          />
        </Stack>
        <div className="button-rate">
          <Button variant="contained" size="small" onClick={handleOnClick}>
            Send
          </Button>
        </div>
      </div>
      {message ? <div className="rating-message">{message}</div> : <></>}
    </>
  );
};

export default RateUs;
