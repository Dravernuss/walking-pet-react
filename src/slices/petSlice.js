import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pet } from "../api/index";

const { getPetsByUser } = pet;

const initialState = {};

export const getPetsByUserAsync = createAsyncThunk(
  "pet/getByUser",
  async (id) => {
    const response = await getPetsByUser(id);
    return response.data;
  }
);

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPetsByUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPetsByUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload;
      });
  },
});

export const myPets = (state) => state.pet.pets;

export default petSlice.reducer;
