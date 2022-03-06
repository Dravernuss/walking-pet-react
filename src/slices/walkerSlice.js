import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walker } from "../api/index";

const { login, updateWalker, getOneWalker, createWalker, getAllWalkers } =
  walker;

const initialState = {};

export const loginWalkerAsync = createAsyncThunk("login", async (walker) => {
  const response = await login(walker);
  return response;
});

export const getAllWalkersAsync = createAsyncThunk(
  "walker/getAllWalkers",
  async () => {
    const response = await getAllWalkers();
    return response.data;
  }
);

export const createWalkerAsync = createAsyncThunk(
  "walker/create",
  async (walker) => {
    const response = await createWalker(walker);
    return response;
  }
);

export const getOneWalkerAsync = createAsyncThunk(
  "walker/getOneWalker",
  async (id) => {
    const response = await getOneWalker(id);
    return response.data;
  }
);

export const updateWalkerAsync = createAsyncThunk(
  "walker/update",
  async (walker) => {
    const response = await updateWalker(walker);
    return response;
  }
);

export const walkerSlice = createSlice({
  name: "walker",
  initialState,
  reducers: {
    walkerToEdit: (state, { payload: newWalkerData }) => {
      state.walker = { ...state.walker, ...newWalkerData };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneWalkerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.walker = action.payload;
      })
      .addCase(loginWalkerAsync.pending, (state, action) => {
        state.alert = false;
      })
      .addCase(loginWalkerAsync.rejected, (state, action) => {
        state.alert = true;
      })
      .addCase(loginWalkerAsync.fulfilled, (state, action) => {
        state.walkerInfo = action.payload; // state.userInfo
        state.loggued = true;
        localStorage.setItem("infoWalker", JSON.stringify(action.payload));
      })
      .addCase(createWalkerAsync.fulfilled, (state, action) => {
        state.created = true;
      });
  },
});

export const { walkerToEdit } = walkerSlice.actions;

export const selectWalkerLoggued = (state) => state.walker.loggued;
export const alertWalker = (state) => state.walker.alert;

export default walkerSlice.reducer;
