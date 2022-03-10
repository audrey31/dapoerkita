import * as React from 'react';
import '../styles/components.css';
// import { FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton } from '@mui/material';
// import { Search } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';


const CustomSearch = () => {
    return ( 
        <div className='search-bar'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#F1F4FA',
                    margin: '1rem 0'
                }}
                 >
                <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Ingin makan apa hari ini?"
                inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
                </IconButton>
            </Paper>
        </div>
     );
}
 
export default CustomSearch;