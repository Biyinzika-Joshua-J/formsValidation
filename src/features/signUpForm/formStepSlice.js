import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeStep: 0,
}

export const formStepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    increment: (state) => {
      state.activeStep += 1
    },
    decrement: (state) => {
      state.activeStep -= 1
    },
  },
})


export const { increment, decrement } = formStepSlice.actions

export default formStepSlice.reducer