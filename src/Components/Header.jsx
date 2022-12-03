import { Button, FormHelperText } from "@mui/material";
import React from "react";
import headStyle from "./CSS/Header.module.css"
const Header = () => {
  
  return (

    <header className={headStyle.header}>
        <Button variant="text" color="secondary" size="large" className={headStyle.headerBtn}>
          <span className={headStyle.headerBody}>Flames Application </span> 
        </Button>
        <div>
        <FormHelperText>
          <span className={headStyle.helper}> Used to test your relationship strength and compatibility </span>
         
          </FormHelperText>
        </div>
    </header>

  );
};

export default Header;
