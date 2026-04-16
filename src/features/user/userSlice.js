import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// CREATE USER
export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, { rejectWithValue }) => {
    try {
      user.role = "employee";
      const res = await axiosInstance.post("/user", {
        ...user,
        id: nanoid(),
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// GET ALL USERS
export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/user");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {},
    isLogin: false,
    loading: false,
    error: null,
  },
  reducers: {
    userLogin(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    logoutUser(state) {
      state.isLogin = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.users = (action.payload || []).filter(
          (val) => val.role !== "admin"
        );
      });
  },
});

export const { userLogin, logoutUser } = userSlice.actions;
export default userSlice.reducer;