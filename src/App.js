import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Forms from "./Components/Forms";
import Header from "./Components/Header";


function App() {
  const [output, setOutput] = useState("");
  return (
    <React.Fragment>
      <div className="global">
        <Header />
        <Forms setOutput={setOutput} />
        <Result output={output} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

const Result = ({ output }) => {
  return (
    <center className="result">
      {output && (
        <>
          <Typography variant="body2" color="inherit" className="cardStyle">
             <span className="out-result">{output} </span> 
          </Typography>
        </>
      )}
    </center>
  );
};
