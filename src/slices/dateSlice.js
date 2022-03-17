import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { date } from "../api/index";

const { updateDate, getOneDate, createDate, getAllDates } = date;

const initialState = {};

export const getAllDatesAsync = createAsyncThunk(
  "date/getAllDate", async () => {
    const response = await getAllDates()
    return response.data
  }
);

export const createDateAsync = createAsyncThunk(
  "date/create",
  async (date) => {
    const response = await createDate(date);
    return response;
  }
);

export const getOneDateAsync = createAsyncThunk(
  "date/getOneDate",
  async (id) => {
    const response = await getOneDate(id);
    return response.data;
  }
);

export const updateDateAsync = createAsyncThunk(
  "date/update",
  async (data) => {
    //data debe ser id y el cambio a realizar
    const response = await updateDate(data);
    return response;
  }
);

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    dateToEdit: (state, { payload: newDateData }) => {
      state.date = { ...state.date, ...newDateData };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneDateAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneDateAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.date = action.payload;
      })
      .addCase(getAllDatesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDatesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allDate = action.payload;
      })
      .addCase(updateDateAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDateAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.allDate = action.payload;
      })
      .addCase(createDateAsync.fulfilled, (state, action) => {
        state.created = true;
      });
  },
});

export const { dateToEdit } = dateSlice.actions;

export const alertDate = (state) => state.date.alert;
export const allDatesObteined = (state) => state.date.allDates;
export default dateSlice.reducer;
