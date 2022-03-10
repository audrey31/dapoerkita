import { Link } from "react-router-dom";

const SectionDivider = ({title, urlLink}) => {
    const url = `/${urlLink}`;
    return ( 
        <div className='section-divider'>
            <div className='section-title text-bold'>{ title }</div>
            <div className='section-more'><Link to={url}
            style={{textDecoration: 'none', color: '#6D9BF3'}}
            >Lihat semua</Link></div>
        </div>
     );
}
 
export default SectionDivider;