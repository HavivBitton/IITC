import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import { TextField, Avatar } from "@mui/material";

const Dummy_Users = [
  {
    id: 1,
    fullName: "Yossef Sabag",
    url: "",
  },
  {
    id: 2,
    fullName: "Eden Shabi",
    url: "https://friendsmerchandise.com/wp-content/uploads/2021/09/friends-smelly-cat-enamel-pin-1.png",
  },
];

const getInitial = (fullName) => {
  const nameArr = fullName.split(" ");
  return nameArr[0][0] + nameArr[1][0];
};

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div>
          {Dummy_Users.map((user) => {
            getInitial(user.fullName);
            return (
              <div key={user.id}>
                <Avatar src={user.url} sx={{ width: "120px", height: "120px" }}>
                  {getInitial(user.fullName)}
                </Avatar>
                .<p>{user.fullName}</p>
              </div>
            );
          })}
        </div>

        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          sx={{ input: { color: "#4287f5" } }}
          id="standard-basic"
          label="Standard"
          variant="standard"
        /> */}
      </div>
    </>
  );
}

export default App;
