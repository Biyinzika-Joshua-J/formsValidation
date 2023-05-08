import { configureStore } from '@reduxjs/toolkit'
import { formStepReducer, cookiePopUpReducer, userCountryReducer } from '../features/index'

export const store = configureStore({
  reducer: {
    step:formStepReducer,
    cookiePopUp:cookiePopUpReducer,
    userCountry:userCountryReducer,
  },
})