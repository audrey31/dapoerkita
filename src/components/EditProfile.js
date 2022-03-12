import { useState } from "react";
import { useAuth } from "../config/Auth";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Alert } from "@mui/material";

const EditProfile = () => {
  const { authToken } = useAuth();
  const [dataUser, setDataUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [success, setSuccess] = useState('');

  const getUserData = () => {
    setIsLoading(false);
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://f191-125-166-13-9.ngrok.io/user",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setDataUser(response.data.data);
        setIsLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleEdit = () => {
    setIsSuccess(false);
    var axios = require("axios");
    var data = {
      no_telp: `${dataUser.no_telp}`,
      nama: `${dataUser.nama}`,
      email: `${dataUser.email}`,
      password: `${dataUser.password}`,
    };

    var config = {
      method: "patch",
      url: "https://f191-125-166-13-9.ngrok.io/user",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setSuccess("Data anda berhasil diubah!");
        setIsSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {isLoading ? (
        <>
          <div className="wrapper-edit-profile">
            <PersonIcon sx={{ fontSize: 100 }} />
            <div className="wrapper-nama-edit edit-margin">
              <div className="nama-edit">Nama:</div>
              <TextField
                hiddenLabel
                
                defaultValue={dataUser.nama}
                variant="filled"
              />
            </div>
            <div className="wrapper-email-edit edit-margin">
              <div className="email-edit">Email:</div>
              <TextField
                hiddenLabel
                
                defaultValue={dataUser.email}
                variant="filled"
              />
            </div>
            <div className="wrapper-telepon-edit edit-margin">
              <div className="telepon-edit">Telepon:</div>
              <TextField
                hiddenLabel
                defaultValue={dataUser.no_telp}
                variant="filled"
              />
            </div>
            <div className="wrapper-password-edit edit-margin">
              <div className="password-edit">Password:</div>
              <TextField
                hiddenLabel
                defaultValue={dataUser.password}
                variant="filled"
              />
            </div>
            {
                isSuccess ? (<Alert severity="success">{`${success}`}</Alert>) : (<></>)
            }
            <div className="edit-margin-top">
            <Button
              variant="contained"
              startIcon={<PublishedWithChangesIcon />}
              color="primary"
              onClick={handleEdit}
            >
              Submit
            </Button>
            </div>
          </div>
          <Navbar />
        </>
      ) : (
        <h1>is loading</h1>
      )}
    </>
  );
};

export default EditProfile;
