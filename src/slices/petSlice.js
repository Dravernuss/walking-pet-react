import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pet } from "../api/index";

const { getPetsByUser, createPet, deletePet } = pet;

const initialState = {};

export const getPetsByUserAsync = createAsyncThunk(
  "pet/getByUser",
  async (id) => {
    const response = await getPetsByUser(id);
    return response.data;
  }
);

export const createPetAsync = createAsyncThunk(
  "pet/create",
  async ({ pet, id }) => {
    const response = await createPet(pet, id);
    return response;
  }
);

export const deletePetAsync = createAsyncThunk("pet/delete", async (id) => {
  const response = await deletePet(id);
  return response;
});

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
      })
      .addCase(createPetAsync.fulfilled, (state, action) => {
        state.created = action.payload;
      })
      .addCase(deletePetAsync.fulfilled, (state, action) => {
        state.deleted = action.payload;
      });
  },
});

export const myPets = (state) => state.pet.pets;

export default petSlice.reducer;
