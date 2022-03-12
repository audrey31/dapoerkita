import { Paper } from "@mui/material";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "../config/Auth";

const ChatBar = ({ idToko }) => {
  const { authToken } = useAuth();
  const [text, setText] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = { teks: `${text}` };

    var config = {
      method: "post",
      url: `https://f191-125-166-13-9.ngrok.io/toko/${idToko}/komentar`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "fullWidth",
          backgroundColor: "#F1F4FA",
          margin: "1rem 0",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Berikan komentar anda"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleOnClick}
        >
          <Send />
        </IconButton>
      </Paper>
    </>
  );
};

export default ChatBar;
