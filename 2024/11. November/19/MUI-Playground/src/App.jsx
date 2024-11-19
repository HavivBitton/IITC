import * as React from "react";
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import { TextField, Avatar, Box, Modal, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  {
    id: 3,
    fullName: "Aviel Moshe",
    url: "/broken-image.jpg",
  },
];

const getInitial = (fullName) => {
  const nameArr = fullName.split(" ");
  return nameArr[0][0] + nameArr[1][0];
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}></Box>
          </Modal>
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
