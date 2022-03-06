import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walker } from "../api/index";

const { loginWalker, updateWalker, getOneWalker, createWalker, getAllWalkers } =
  walker;

const initialState = {};

export const loginWalkerAsync = createAsyncThunk(
  "loginWalker",
  async (walker) => {
    const response = await loginWalker(walker);
    return response;
  }
);

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
        state.alertWalker = false;
      })
      .addCase(loginWalkerAsync.rejected, (state, action) => {
        state.alertWalker = true;
      })
      .addCase(loginWalkerAsync.fulfilled, (state, action) => {
        state.walkerInfo = action.payload; // state.userInfo
        state.logguedWalker = true;
        localStorage.setItem("infoUser", JSON.stringify(action.payload));
      })
      .addCase(createWalkerAsync.fulfilled, (state, action) => {
        state.created = true;
      });
  },
});

export const { walkerToEdit } = walkerSlice.actions;

export const selectWalkerLoggued = (state) => state.walker.logguedWalker;
export const alertWalker = (state) => state.walker.alertWalker;
export const toWalker = (state) => state.walker.walker;

export default walkerSlice.reducer;
