import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { BorderLeft, Search } from "@mui/icons-material";
import { fetchFromAPI } from "./../utils/fetchFromAPI";

const SearchInput = () => {
  const [inputData, setInputData] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputData) {
      navigate(`search/${inputData}`);
      setInputData("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      className="paper-input"
    >
      <input
        type="text"
        style={{
          border: "none",
          outline: "none",
          width: "350px",
          padding: "8px",
        }}
        value={inputData}
        placeholder="Search for something..."
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
