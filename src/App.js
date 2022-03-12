import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FoodBlogList from "./pages/FoodBlogList";
import { ThemeProvider } from "@mui/private-theming";
import { createTheme } from "@mui/material";
import ArticleList from "./pages/ArticleList";
import MarketList from "./pages/MarketList";
import MarketDetail from "./pages/MarketDetail";
import { AuthContext } from "./config/Auth";
import { useState } from "react";
import { PrivateRoute, RestrictedRoute } from "./config/PrivateRoute";

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Poppins"`,
    },
  });

  const isAnyToken = JSON.parse(localStorage.getItem("tokens"));
  const [authToken, setAuthToken] = useState(isAnyToken);

  const setAndGetTokens = (token) => {
    localStorage.setItem("tokens", JSON.stringify(token));
    setAuthToken(token);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAndGetTokens }}>
      <ThemeProvider theme={THEME}>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <Register />
                </RestrictedRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/blog-list"
              element={
                <PrivateRoute>
                  <FoodBlogList />
                </PrivateRoute>
              }
            />
            <Route
              path="/article-list"
              element={
                <PrivateRoute>
                  <ArticleList />
                </PrivateRoute>
              }
            />
            <Route
              path="/market-list"
              element={
                <PrivateRoute>
                  <MarketList />
                </PrivateRoute>
              }
            />
            <Route
              path="/market-list/toko/:id"
              element={
                <PrivateRoute>
                  <MarketDetail />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
