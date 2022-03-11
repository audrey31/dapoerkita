import '../styles/home.css';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomSearch from '../components/Search';
import FoodCard from '../components/FoodCard';
import SectionDivider from '../components/SectionDivider';
import BloggerCard from '../components/BloggerCard';
import Navbar from '../components/Navbar';


const Home = () => {
    const [name, setName] = useState('Dummy Name');
    
    return ( 
        <div className="wrapper-home">
            <div className='profile-notification'>
                <div className='profile-spoiler text-bold'>
                    <div className='profile-logo'><AccountCircleIcon fontSize='large'/></div>
                    <div className='text-name'>Hi, {name}</div>
                </div>
                <div className='notification'><NotificationsIcon /></div>
            </div>
            <CustomSearch />
            <SectionDivider title='Berdasarkan pencarianmu' urlLink='market-list' seeAll='Lihat semua'/>
            <div className='home-suggestion'>
                <FoodCard />
                <FoodCard />
            </div>
            <SectionDivider title='Food Blogger' urlLink='blog-list' seeAll='Lihat semua' />
            <div className='blogger-section'>
                <BloggerCard />
                <BloggerCard />
                <BloggerCard />
            </div>
            <Navbar />
        </div>
     );
}
 
export default Home;