import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import TextField from "@mui/material/TextField";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          sx={{ input: { color: "#4287f5" } }}
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </div>
    </>
  );
}

export default App;
