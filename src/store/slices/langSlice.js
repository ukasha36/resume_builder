import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "es", //es for spanish, pt for portuguese and en for english
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload.lang;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
