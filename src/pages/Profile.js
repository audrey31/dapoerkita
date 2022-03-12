import Navbar from "../components/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../config/Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { setAndGetTokens } = useAuth();
  const handleLogout = () => {
    setAndGetTokens();
    localStorage.clear();
  };
  
  let navigate = useNavigate();
  const handleEdit = () => {
    navigate("/edit-profile", { replace: true });
  }

  return (
    <>
      <div className="wrapper-profile">
        <PersonIcon sx={{ fontSize: 100 }} />
        <Button variant="contained" sx={{ margin: "15px 20px" }} fullWidth
        onClick={handleEdit}
        >
          Edit Profile
        </Button>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <Navbar />
    </>
  );
};

export default Profile;
