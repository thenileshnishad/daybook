import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    userInfo: (state, action) => {
      return action.payload;
    },
    removeUserInfo: () => {
      return null;
    },
  },
});

export const { userInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
