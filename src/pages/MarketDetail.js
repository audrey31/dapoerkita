import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarketView from "../components/MarketView";

const MarketDetail = () => {
    let {id} = useParams();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `http://46ef-125-166-13-9.ngrok.io/toko/${id}`,
            headers: { }
        };

        axios(config)
        .then(function (response) {
            setData(response.data.data);
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
                <MarketView 
                toko={data.nama}
                
                />
                </>
            ) : (
                <h1>is loading...</h1>
            )
        }
        </>
     );
}
 
export default MarketDetail;