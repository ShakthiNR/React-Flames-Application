import { Button, Typography } from "@mui/material";
import React from "react";
import footerStyles from "./CSS/Footer.module.css";
const Footer = () => {
  return (
    <footer className={footerStyles.footerBody}>
      <Button variant="text" size="small">
        Developed by - Shakthi N R
      </Button>
    </footer>
  );
};

export default Footer;
