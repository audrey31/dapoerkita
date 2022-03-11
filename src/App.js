import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import FoodBlogList from './pages/FoodBlogList'
import { ThemeProvider } from '@mui/private-theming';
import { createTheme } from '@mui/material';
import ArticleList from './pages/ArticleList';
import MarketList from './pages/MarketList';
import MarketDetail from './pages/MarketDetail';

function App() {
  const THEME = createTheme({
    typography: {
     "fontFamily": `"Poppins"`,
    }
 });

  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Routes>
          <Route path='/login' element= { <Login />}/>
          <Route path='/register' element= { <Register />}/>
          <Route path='/home' element= { <Home />}/>
          <Route path='/blog-list' element= { <FoodBlogList />}/>
          <Route path='/article-list' element= { <ArticleList />}/>
          <Route path='/market-list' element= { <MarketList />}/>
          <Route path='/market-list/toko/:id' element= { <MarketDetail />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
