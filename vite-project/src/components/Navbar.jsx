import { Stack } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
      }}
    >
      <Link to="/">
        <img src={logo} alt="" width="50px" height="50px" />
      </Link>
      {/* <Stack sx={{ marginLeft: "auto", marginRight: "auto" }}> */}
      <SearchInput />
      {/* </Stack> */}
    </Stack>
  );
};

export default Navbar;
