import {createSlice} from '@reduxjs/toolkit';

export const referralSlice = createSlice({
  name: 'referral',
  initialState: {
    referral: [],
    error: null,
  },
  reducers: {
    referralData: (state, action) => {
      state.referral = action.payload;
    },
  },
});

export const {referralData} = referralSlice.actions;

export default referralSlice.reducer;
