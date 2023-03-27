import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk("users", async (object, { dispatch, getState }) => {
      dispatch(gettingUserListLoading());
      const users = await axios
      .get("http://localhost:3000/users")
      .then((response) => dispatch(gettingUserListSuccess(response.data)))
      .catch((error) => dispatch(gettingUserListFailed(error)));
    }
  );

const userData = createSlice({
    name: 'users',
    initialState: {
        users: [],
        usersLoading: false,
        usersError:false,
        usersErrorMessage: "",
        status: 'idle',
    },
    reducers: {
        gettingUserListLoading: (state, action) => {
        state.users = null;
        state.usersLoading = true;
        state.usersError = false;
        state.usersErrorMessage = null;
        state.status = "loading";
      },
      gettingUserListSuccess: (state, action) => {
        state.users = action.payload;
        state.usersLoading = false;
        state.usersError = false;
        state.usersErrorMessage = null;
        state.status = "success";
      },
      gettingUserListFailed: (state, action) => {
        state.users = null;
        state.usersLoading = false;
        state.usersError = true;
        state.usersErrorMessage = action.payload;
        state.status = "error";
      },
      gettingUserListClear: (state, action) => {
        state.users = null;
        state.usersLoading = false;
        state.usersError = false;
        state.usersErrorMessage = null;
        state.status = "idle";
      }
    }
})

export const {
  gettingUserListClear,
  gettingUserListLoading,
  gettingUserListSuccess,
  gettingUserListFailed,
} = userData.actions;
export default userData.reducer