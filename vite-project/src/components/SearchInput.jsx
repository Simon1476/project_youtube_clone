import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { BorderLeft, Search } from "@mui/icons-material";

const SearchInput = () => {
  return (
    <Paper
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
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
