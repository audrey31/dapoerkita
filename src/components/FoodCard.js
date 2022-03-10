import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';
import { Box } from '@mui/material';
import { shadows } from '@mui/system';

const FoodCard = () => {
    return ( 
        <div className="food-card">
            <div className='box-shadow'>
            <div className="food-desc">
                <img src="https://cdn.discordapp.com/attachments/807279199429197845/949657696926314517/unknown.png"></img>
                <div className="food-text text-small">Takoyaki Mamah</div>
                <div className='food-info'>
                    <div className='food-distance text-small'>2.1 km • </div>
                    <div className='star-icon'><Box
                        sx={{
                            marginTop : '10px',
                            display: 'inline'
                        }}
                        ><StarIcon fontSize='small' /></Box>
                    </div>
                    <div className='food-rating text-small'>4.8</div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default FoodCard ;