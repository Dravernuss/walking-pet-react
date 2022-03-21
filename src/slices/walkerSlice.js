import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walker } from "../api/index";

const {
  loginWalker,
  updateWalker,
  getOneWalker,
  createWalker,
  getAllWalkers,
  getAllWalkersRegistration,
} = walker;

const initialState = {};

export const loginWalkerAsync = createAsyncThunk(
  "loginWalker",
  async (walker) => {
    const response = await loginWalker(walker);
    return response;
  }
);

export const getAllWalkersAsync = createAsyncThunk(
  "walker/getAllWalker",
  async () => {
    const response = await getAllWalkers();
    return response.data;
  }
);

export const getAllWalkersRegistrationAsync = createAsyncThunk(
  "walker/getAllWalkerRegistration",
  async () => {
    const response = await getAllWalkersRegistration();
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
  async (data) => {
    const response = await updateWalker(data);
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
    walkerToCreate1: (state, { payload: newWalkerCreated }) => {
      state.walkerCreated = { newWalkerCreated };
    },
    walkerToCreate2: (state, { payload: newWalkerCreated2 }) => {
      state.walkerCreated = { newWalkerCreated2 };
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
      .addCase(getAllWalkersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllWalkersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allWalker = action.payload;
      })
      .addCase(getAllWalkersRegistrationAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllWalkersRegistrationAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allWalkerRegistration = action.payload;
      })
      .addCase(updateWalkerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.allWalker = action.payload;
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

export const { walkerToEdit, walkerToCreate1, walkerToCreate2 } =
  walkerSlice.actions;

export const selectWalkerLoggued = (state) => state.walker.logguedWalker;
export const alertWalker = (state) => state.walker.alertWalker;
export const toWalker = (state) => state.walker.walker;
export const walkerCreated = (state) =>
  state.walker?.walkerCreated?.newWalkerCreated;
export const walkerCreated2 = (state) =>
  state.walker.walkerCreated.newWalkerCreated2;

export default walkerSlice.reducer;
