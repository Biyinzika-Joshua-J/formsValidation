import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
}

export const cookiePopUpSlice = createSlice({
  name: 'cookiePopUp',
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
})


export const { open, close } = cookiePopUpSlice.actions

export default cookiePopUpSlice.reducer