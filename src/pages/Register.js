import { TextField, Button } from "@mui/material";
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import "../styles/login.css";

const Register = () => {
    const [values, setValues] = useState({
        password: '',
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
                      label='Nama Lengkap'
                      type='text'
                      className="text-field"
                      fullWidth
                      required
                  />
                  </div>
                  <div className="forms">
                  <TextField
                      label='Nomor Telepon'
                      type='text'
                      className="text-field"
                      fullWidth
                      required
                  />
                  </div>
                  <div className="forms">
                  <TextField
                      label='Alamat Email'
                      type='email'
                      className="text-field"
                      fullWidth
                      required
                  />
                  </div>
                  <div className="forms">
                  <FormControl variant="outlined" fullWidth required className="text-field">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
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
                  <Button variant="contained" size="large"
                  style={{minWidth: '100px', width: '200px'}}
                  className="button"
                  >Daftar</Button>
              </div>
              <div className="register-text">Sudah memiliki akun? <Link to='/login' style={{textDecoration: 'none', color: '#6D9BF3'}}>Masuk</Link></div>
          </div>
       );
}
 
export default Register;