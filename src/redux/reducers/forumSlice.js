import {createSlice} from '@reduxjs/toolkit';

export const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    error: null,
    category: [],
    loading: false,
  },
  reducers: {
    forumData: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {forumData} = forumSlice.actions;

export default forumSlice.reducer;
