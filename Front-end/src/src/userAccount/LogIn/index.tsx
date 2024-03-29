import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import { memo, useState } from "react";
  import { User } from "./tyeps.User";
  import { useNavigate } from 'react-router-dom';
  
  export const Login = memo(() => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const onClickLogin = async () => {
      const authStatus = await axios
        .post<User>("http://localhost:1323/api/login", {
          user_id: userId,
          password,
        })
        .then(() => navigate("/home"))
        .catch((error) => {
          navigate("/fail_login");
        });
      console.log("authStatus: ", authStatus);
    };
  
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={20}
      >
        <Card >
          <CardHeader title="ログインページ" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e) => setUserId(e.target.value)}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={onClickLogin}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });