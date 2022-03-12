import "../styles/home.css";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CustomSearch from "../components/Search";
import FoodCard from "../components/FoodCard";
import SectionDivider from "../components/SectionDivider";
import BloggerCard from "../components/BloggerCard";
import Navbar from "../components/Navbar";
import { useAuth } from "../config/Auth";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const { authToken } = useAuth();

  const getUserData = () => {
    // setIsLoading(false);
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
        console.log(response.data);
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

  return (
    <>
      {isLoading ? (
        <>
          <div className="wrapper-home">
            <div className="profile-notification">
              <div className="profile-spoiler text-bold">
                <div className="profile-logo">
                  <AccountCircleIcon fontSize="large" />
                </div>
                <div className="text-name">Halo {dataUser.nama}</div>
              </div>
              <div className="notification">
                <NotificationsIcon />
              </div>
            </div>
            <CustomSearch />
            <SectionDivider
              title="Berdasarkan pencarianmu"
              urlLink="market-list"
              seeAll="Lihat semua"
            />
            <div className="home-suggestion">
              <FoodCard />
              <FoodCard />
            </div>
            <SectionDivider
              title="Food Blogger"
              urlLink="blog-list"
              seeAll="Lihat semua"
            />
            <div className="blogger-section">
              <BloggerCard />
              <BloggerCard />
              <BloggerCard />
            </div>
            <Navbar />
          </div>
        </>
      ) : (
        <h1>is loading...</h1>
      )}
    </>
  );
};

export default Home;
