import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
const url = "https://62a6c1e2bedc4ca6d7b9735c.mockapi.io/users";

export const addAsync = createAsyncThunk("users/addAsync", async function () {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
    status: null, //
    error: null, //
  },
  reducers: {
    toAdd: (state, user) => {
      state.value.push(user.payload);
    },
    toDelete: (state, user) => {
      delete state.value[user.payload];
    },
  },
  extraReducers: {
    [addAsync.pending]: (state, action) => {
      state.status = "pending"
      state.error = null
    },
    [addAsync.fulfilled]: (state,action)=> {
      state.status = "resolved"
      state.value.push(action.payload)
    },
    [addAsync.rejected]: (state,action) => {
      state.status = "error"
      console.log('error')
    },
  },
});

export const { toAdd, toDelete } = usersSlice.actions;

export const selectCount = (state) => state.users.value;

export default usersSlice.reducer;
