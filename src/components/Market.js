import { Link } from "react-router-dom";

const Market = ({title, funfact, marketID}) => {
    return ( 
        <>  
        <Link to={`toko/${marketID}`} style={{textDecoration: 'none', color: '#6D9BF3'}} >
            <div className="market-card">
            <div className='box-shadow'>
            <div className="market-desc">
                <div className='info-desc'>
                    <div className="market-text text-small">{title}</div>
                        <div className='market-info'>
                            {/* <div className='food-distance text-small'></div>
                            <div className='star-icon'><Box
                            sx={{
                                marginTop : '10px',
                                display: 'inline'
                            }}
                            ></Box></div> */}
                    <div className='wrapper-info text-small grey'>
                        {funfact[0].teks}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Link>
        </>
     );
}
 
export default Market;