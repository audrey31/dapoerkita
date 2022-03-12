import "../styles/components.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomSearch = (props) => {
  const [category, setCategory] = useState("kategori");
  const [searchText, setSearchText] = useState("ayam");
  let navigate = useNavigate();

  const moveData = () => {
    navigate("/market-list", {
      state: {
        id: 1,
        teks: `${searchText}`,
        kategori: `${category}`,
      },
    });
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  //   let dataSearchCategory = [{
  //       teks: `${searchText}`,
  //       category: `${category}`
  //   }]

  return (
    <div className="search-bar">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          backgroundColor: "#F1F4FA",
          margin: "1rem 0",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ingin makan apa hari ini?"
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={moveData}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              moveData();
            }
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className="category">
        <FormControl sx={{ m: 1, minWidth: 80, height: "3.35rem" }}>
          <InputLabel>filter</InputLabel>
          <Select
            value={category}
            onChange={handleChange}
            autoWidth
            label="filter"
            defaultValue="nama"
          >
            <MenuItem value="nama">Nama</MenuItem>
            <MenuItem value="kota">Kota</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="menu">Menu</MenuItem>
            <MenuItem value="kategori">Kategori</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CustomSearch;
