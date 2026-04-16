import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance.js";

export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (blog, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/blog", blog);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBlog = createAsyncThunk(
  "blog/getAllBlog",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/blog");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogData: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {

    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogData.push(action.payload);
    });

    builder.addCase(getAllBlog.fulfilled, (state, action) => {
      state.loading = false;
    });

  },
});

export default blogSlice.reducer;