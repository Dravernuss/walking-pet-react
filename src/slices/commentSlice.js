import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { comment } from "../api/index";

const {
  getAllComments,
  getAllCommentsByWalker,
  getAllReports,
  getCommentById,
  createComment,
  updateCommentByAdmin,
} = comment;

const initialState = {};

export const getAllCommentsAsync = createAsyncThunk(
  "comments/getAllComments",
  async () => {
    const response = await getAllComments();
    return response.data;
  }
);

export const getAllCommentsByWalkerAsync = createAsyncThunk(
  "comments/getAllCommentsByWalker",
  async (id) => {
    const response = await getAllCommentsByWalker(id);
    return response.data;
  }
);

export const getAllReportsAsync = createAsyncThunk(
  "comments/getAllReports",
  async () => {
    const response = await getAllReports();
    return response.data;
  }
);

export const getCommentByIdAsync = createAsyncThunk(
  "comments/getCommentById",
  async (id) => {
    const response = await getCommentById(id);
    return response.data;
  }
);

export const createCommentAsync = createAsyncThunk(
  "comments/create",
  async (comment) => {
    const response = await createComment(comment);
    return response.data;
  }
);

export const updateCommentByAdminAsync = createAsyncThunk(
  "comments/update",
  async (comment) => {
    const response = await updateCommentByAdmin(comment);
    return response;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentToEdit: (state, { payload: newCommentData }) => {
      state.commentToEdit = { ...state.commentToEdit, ...newCommentData };
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllReportsAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllReportsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.reports = action.payload;
    })
      .addCase(getAllCommentsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCommentsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getAllCommentsByWalkerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCommentsByWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.commentsByWalker = action.payload;
      })
      .addCase(createCommentAsync.fulfilled, (state, action) => {
        state.created = true;
        state.commentCreated = action.payload;
      });
    //   .addCase(getDateByIdAsync.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.dateSelected = action.payload;
    //   })
  },
});

export const { commentToEdit } = commentsSlice.actions;

export const commentsByWalker = (state) => state.comments.commentsByWalker;
// export const datesWalker = (state) => state.dates.datesByWalker;

// export const dateSelected = (state) => state.dates.dateSelected;

export default commentsSlice.reducer;
