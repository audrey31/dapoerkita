import { TextField, Button } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    var axios = require("axios");
    var data = {
      nama: `${nama}`,
      email: `${email}`,
      password: `${password}`,
      no_telp: `${noTelp}`,
    };

    var config = {
      method: "post",
      url: "https://f191-125-166-13-9.ngrok.io/user/register",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  return (
    <div className="wrapper">
      <h1>Daftar</h1>
      <form>
        <div className="forms">
          <TextField
            label="Nama Lengkap"
            type="text"
            className="text-field"
            fullWidth
            required
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="forms">
          <TextField
            label="Nomor Telepon"
            type="text"
            className="text-field"
            fullWidth
            required
            onChange={(e) => setNoTelp(e.target.value)}
          />
        </div>
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
          onClick={handleRegister}
        >
          Daftar
        </Button>
      </div>
      <div className="register-text">
        Sudah memiliki akun?{" "}
        <Link to="/login" style={{ textDecoration: "none", color: "#6D9BF3" }}>
          Masuk
        </Link>
      </div>
    </div>
  );
};

export default Register;
