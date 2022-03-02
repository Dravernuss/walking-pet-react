import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { user } from "../api/index";

const { login, updateUser, getOneUser } = user;

const initialState = {};

export const loginUserAsync = createAsyncThunk("login", async (user) => {
  const response = await login(user);
  return response;
});

export const getOneUserAsync = createAsyncThunk(
  "user/getOneUser",
  async (id) => {
    const response = await getOneUser(id);
    console.log("getOneUserAsync", response.data);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk("user/update", async (user) => {
  const response = await updateUser(user);
  console.log("USERrrr", user);
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userToEdit: (state, { payload: newUserData }) => {
      state.userInfo = { ...state.userInfo, ...newUserData };
      console.table(state);
      console.log("user", user);
      console.log("nanan");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        console.log(action);
        state.userInfo = action.payload;
        state.loggued = true;
        localStorage.setItem("infoUser", JSON.stringify(action.payload));
      });
  },
});

export const { userToEdit } = userSlice.actions;

export const selectUserLoggued = (state) => state.user.loggued;
export const selectUser = (state) => state.user.userInfo;
export const selectUserToEdit = (state) => state.user.userToEdit;

export default userSlice.reducer;
