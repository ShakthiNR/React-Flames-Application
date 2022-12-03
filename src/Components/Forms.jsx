import { Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import formStyle from "./CSS/Form.module.css"
import { flamesFn } from "./Helpers/flamesFn";
import { Buttons } from "./Buttons";





const Forms = ({ setOutput }) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [error, setError] = useState(false);

  const validatingName = (name1, name2) => {
    
    if (!name1.replace(/\s/g, '').length) {
      alert("Please Enter Characters in Your Name");
      return false;
    } else if (!name2.replace(/\s/g, '').length) {
      alert("Please Enter Characters in Your Crush Name");
      return false;
    }
    return true;
  };

  const handleMatch = (fire) => {
    if (user1.length === 0 || user2.length === 0) {
      setError(true);
      return;
    }

    const resVal = validatingName(user1, user2);
    if (!resVal) {
      return;
    }

    const partner1 = user1.toLowerCase();
    const partner2 = user2.toLowerCase();
    flamesFn(partner1, partner2)
      .then((res) => {
        handleOutput(res, user1, user2);
        fire();
      })
      .catch((err) => alert(`Error Occurred in the function ${err}`));
  };
  const handleOutput = (result, user1, user2) => {
    if (result === "e") {
      setOutput("👿⚔️ " +user1 + " is enemy to " + user2 + " ⚔️👿");
    } else if (result === "f") {
      setOutput("​👏👫 "+user1 + " is friend to " + user2 + " ​👫​👏​");
    } else if (result === "m") {
      setOutput("💍​🤵 "+user1 + " is going to marry " + user2 +" 👰💍");
    } else if (result === "l") {
      setOutput("💘 "+user1 + " is in love with " + user2 +" 💘");
    } else if (result === "a") {
      setOutput("😍 "+user1 + " has more affection on " + user2+" 😍");
    } else {
      setOutput("👨‍👩‍👧‍👦 "+user1 + " and " + user2 + " are sisters/brothers" +" 👨‍👩‍👧‍👦");
    }
  };

  const handleReset = () => {
    setUser1("");
    setUser2("");
    setOutput("");
    setError(false);
  };

  return (
    <React.Fragment>
     <div className={formStyle.formBody}>
        

        <Stack
          direction="column"
          spacing={2}
          className={formStyle.form}
        >

          <TextField
           variant="standard"
            error={error && user1.length === 0}
            
            placeholder="Enter your name"
            onChange={(e) => {
              setUser1(e.target.value);
              setOutput("");
            }}
            value={user1}
            
            helperText={error && user1.length === 0 && "Your Name is required"}
            color="secondary"
            size="small"
            
          />
          <TextField variant="standard"
         
            placeholder="Enter your crush name"
            color="secondary"
            size="small"
            onChange={(e) => {
              setUser2(e.target.value);
              setOutput("");
            }}
            value={user2}
            error={error && user2.length === 0}
            helperText={error && user2.length === 0 && "Your Crush is required"}
          />

          <Stack direction="row" spacing={2} style={{marginTop:"40px"}}>
            <Buttons handleMatch={handleMatch} handleReset={handleReset} />
          </Stack>

          
        </Stack>
      
        </div>
    
    </React.Fragment>
  );
};

export default Forms;
