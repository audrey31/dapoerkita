import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dapoerAPI from "../config/api";
import { useAuth } from "../config/Auth";

const Login = () => {
  const { setAndGetTokens } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleLogin = (e) => {
    var axios = require("axios");
    var data = { email: `${email}`, password: `${password}` };

    var config = {
      method: "post",
      url: "https://f191-125-166-13-9.ngrok.io/user/login",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        //   console.log(typeof JSON.stringify())
        setAndGetTokens(JSON.stringify(response.data.data.token));
        navigate("/home", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="wrapper">
      <h1>Masuk</h1>
      <form>
        <div className="forms">
          <TextField
            label="Alamat Email"
            type="email"
            className="text-field"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="forms">
          <FormControl
            variant="outlined"
            fullWidth
            required
            className="text-field"
            onChange={(e) => setPassword(e.target.value)}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
      </form>
      <div className="button">
        <Button
          variant="contained"
          size="large"
          style={{ minWidth: "100px", width: "200px" }}
          className="button"
          onClick={handleLogin}
        >
          Masuk
        </Button>
      </div>
      <div className="register-text">
        Belum memiliki akun?{" "}
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#6D9BF3" }}
        >
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default Login;
