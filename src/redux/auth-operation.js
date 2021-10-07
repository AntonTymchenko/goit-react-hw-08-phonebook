import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  // console.log(credentials);
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(`${credentials.email} is not registred!`);
    return;
  }
});

const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    const { data } = await axios.post("/users/logout", credentials);
    token.unset();
    return data;
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
