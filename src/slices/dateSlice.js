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
  async ({ date, id }) => {
    const response = await createDate(date, id);
    return response;
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
      .addCase(getDatesByUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDatesByUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.datesByUser = action.payload;
      })
      .addCase(getDateByIdAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDateByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.dateSelected = action.payload;
      });
    //   .addCase(getPetsByUserAsync.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.pets = action.payload;
    //   })
    //   .addCase(createPetAsync.fulfilled, (state, action) => {
    //     state.created = action.payload;
    //   })
    //   .addCase(deletePetAsync.fulfilled, (state, action) => {
    //     state.deleted = action.payload;
    //   });
  },
});

export const { datesToEdit } = datesSlice.actions;

export const datesUser = (state) => state.dates.datesByUser;

export const dateSelected = (state) => state.dates.dateSelected;

export default datesSlice.reducer;
