import { useEffect, useState } from "react";
import Market from "../components/Market";
import Navbar from "../components/Navbar";
import CustomSearch from "../components/Search";
import SectionDivider from "../components/SectionDivider";
import "../styles/market.css";
import {dapoerAPI} from "../config/api"
import axios from "axios";

const MarketList = () => {
    // const [markets, setMarkets] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // const fetchMarkets = async () => {
        //     try {
        //         const response = await dapoerAPI.get('/toko');
        //         setMarkets(response.data);
        //     } catch(err) {
        //         if (err.response) {
        //         console.log(err.response.message);
        //         console.log(err.response.success);
        //         } else {
        //             console.log(`Err: ${err.message}`)
        //         }
        //     }
        // }
        // fetchMarkets();
        setIsLoading(false);
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://f191-125-166-13-9.ngrok.io/toko',
            headers: { }
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
    }, [])

    return ( 
        <>
        {
            isLoading ? (
                <>
                <div className="wrapper-market">
                <h1>Laper ya?</h1>
                <CustomSearch />
                <SectionDivider title="Warung kami:" urlLink=""/>
                {/* <Market title={data.data[0].Nama} funfact={data.data[0].Funfact} /> */}
                {data.map((dt) => (
                    <Market title={dt.nama} funfact={dt.funfact} key={dt.id} marketID={dt.id}
                    />
                ))}
                <Navbar />
                </div>
                </>
            ) : (
                <h1>is loading...</h1>
            )
        }
        </>
     );
}
 
export default MarketList;