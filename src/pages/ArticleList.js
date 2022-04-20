import { useEffect } from "react";
import ArticleNav from "../components/ArticleNav";
import Navbar from "../components/Navbar";


    const ArticleList = () => {
        const getUserData = () => {
            // setIsLoading(false);
            var axios = require("axios");
        
            var config = {
            method: "post",
            url: "http://7477-140-213-188-9.ngrok.io/api/v1/auth/register",
            
            data: {
                "username": "yerobalg",
        "email": "yerobal@gmail.com",
        "password": "rahasia123",
        "nama": "Yerobal Gustaf Sekeon",
        "nomorHP": "087854789691",
        "jenisKelamin": true
            }
            };
        
            axios(config)
            .then(function (response) {
                console.log(response.data);
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
        <ArticleNav />
        <Navbar />
        </>
     );
}
 
export default ArticleList;