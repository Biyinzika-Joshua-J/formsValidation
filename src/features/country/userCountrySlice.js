import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  code: 'ug',
}

export const userCountrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    update: (state, payload) => {
      state.code = payload.payload.code;
    },
  
  },
})


export const { update } = userCountrySlice.actions

export default userCountrySlice.reducer