import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constans";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory && "yellow",
            }}
          >
            {category.name}
          </span>
          <span
            style={{
              color: category.name === selectedCategory && "yellow",
            }}
          >
            {category.icon}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
