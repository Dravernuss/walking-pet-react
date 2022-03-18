import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { date } from "../api/index";

const {
  getDatesByUser,
  getDatesByWalker,
  createDate,
  updateDate,
  getAllDates,
  getDateById,
} = date;

const initialState = {};

export const getAllDatesAsync = createAsyncThunk(
  "dates/getAllDates",
  async () => {
    const response = await getAllDates();
    return response.data;
  }
);

export const getDateByIdAsync = createAsyncThunk(
  "dates/getDateById",
  async (id) => {
    const response = await getDateById(id);
    return response.data;
  }
);

export const getDatesByUserAsync = createAsyncThunk(
  "dates/datesByUser",
  async (id) => {
    const response = await getDatesByUser(id);
    return response.data;
  }
);
export const getDatesByWalkerAsync = createAsyncThunk(
  "dates/datesByWalker",
  async (id) => {
    const response = await getDatesByWalker(id);
    return response.data;
  }
);

export const createDateAsync = createAsyncThunk(
  "dates/create",
  async (date) => {
    const response = await createDate(date);
    return response.data;
  }
);

export const updateDateAsync = createAsyncThunk(
  "dates/update",
  async (date) => {
    const response = await updateDate(date);
    return response;
  }
);

export const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    dateToEdit: (state, { payload: newDateData }) => {
      state.dateToEdit = { ...state.dateToEdit, ...newDateData };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDatesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDatesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allDates = action.payload;
      })
      .addCase(getDatesByUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDatesByUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.datesByUser = action.payload;
      })
      .addCase(getDatesByWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.datesByWalker = action.payload;
      })
      .addCase(getDateByIdAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDateByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.dateSelected = action.payload;
      })
      .addCase(createDateAsync.fulfilled, (state, action) => {
        state.created = true;
        state.date = action.payload;
      });
  },
});

export const { dateToEdit } = datesSlice.actions;

export const alertDate = (state) => state.date.alert;
export const allDatesObteined = (state) => state.date.allDates;

export const datesUser = (state) => state.dates.datesByUser;
export const datesWalker = (state) => state.dates.datesByWalker;

export const dateSelected = (state) => state.dates.dateSelected;

export default datesSlice.reducer;
