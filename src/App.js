import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import FoodBlogList from './pages/FoodBlogList'
import { ThemeProvider } from '@mui/private-theming';
import { createTheme } from '@mui/material';
import ArticleList from './pages/ArticleList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element= { <Login />}/>
        <Route path='/register' element= { <Register />}/>
        <Route path='/home' element= { <Home />}/>
        <Route path='/blog-list' element= { <FoodBlogList />}/>
        <Route path='/article-list' element= { <ArticleList />}/>
      </Routes>
    </Router>
  );
}

export default App;
