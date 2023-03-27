import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk("posts", async (object, { dispatch, getState }) => {
    dispatch(gettingPostListLoading());
    const users = await axios
    .get("http://localhost:3000/posts")
    .then((response) => dispatch(gettingPostListSuccess(response.data)))
    .catch((error) => dispatch(gettingPostListFailed(error)));
  }
);

const postData = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        postsLoading: false,
        postsError:false,
        postsErrorMessage: "",
        status: 'idle',
    },
    reducers: {
        gettingPostListLoading: (state, action) => {
        state.posts = null;
        state.postsLoading = true;
        state.postsError = false;
        state.postsErrorMessage = null;
        state.status = "loading";
      },
      gettingPostListSuccess: (state, action) => {
        state.posts = action.payload;
        state.postsLoading = false;
        state.postsError = false;
        state.postsErrorMessage = null;
        state.status = "success";
      },
      gettingPostListFailed: (state, action) => {
        state.posts = null;
        state.postsLoading = false;
        state.postsError = true;
        state.postsErrorMessage = action.payload;
        state.status = "error";
      },
      gettingPostListClear: (state, action) => {
        state.posts = null;
        state.postsLoading = false;
        state.postsError = false;
        state.postsErrorMessage = null;
        state.status = "idle";
      }
    }
})

export const {
    gettingPostListClear,
    gettingPostListLoading,
    gettingPostListSuccess,
    gettingPostListFailed,
  } = postData.actions;
  export default postData.reducer