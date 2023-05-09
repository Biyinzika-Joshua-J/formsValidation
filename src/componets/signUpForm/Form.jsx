import React, { useState, useEffect } from "react";
import { Box, TextField, FormControl, Button, IconButton, Typography } from "@mui/material";
import FormInput from "./FormInput";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneNumberInput from "./PhoneNumberInput";
import { isPhoneValid } from "../../utilities/isPhoneValid";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/signUpForm/formStepSlice";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import isEmailValid from "../../utilities/emailValidator";
import { useNavigate } from "react-router-dom";
import { setCookies } from "../../utilities/setCookies";

import './form.css';

const validationSchema = yup
  .object({
    name: yup.string().required("Name Validation Field is Required").min(2),
    telephone: yup.string().min(10).required("A phone number is required"),
    email: yup.string().email().required(),
    agree_to_terms_and_conditions: yup.bool().oneOf([true], 'Checkbox selection is required').required(),
  })


const stepFormTitles = [
  "Your new here? Let's get some information. First your name.",
  "Second, your telephone number",
  "And lastily, your email address",
]

const disabledButtonStyles = {
  border: '1px solid #999999',
  backgroundColor: '#cccccc',
  color: '#666666',
}

const enabledButtonStyles = {
  backgroundColor: 'green', color: '#fff', ':hover': { backgroundColor: 'black', color: '#fff', }
}

const Form = () => {
  const [phoneValid, setPhoneValid] = useState(true);
  const [name, setNameValue] = useState('');
  const [phone, setPhoneValue] = useState('');
  const [email, setEmailValue] = useState('');
  const [userAgreedToTermsAndConditions, setUserAgreedToTermsAndConditions] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [previousDisabled, setPreviousDisabled] = useState(false);
  const [navigationButtonStyles, setNavigationButtonStyles] = useState(disabledButtonStyles);
  const activeStep = useSelector(state => state.step.activeStep);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      telephone: "",
      email: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    register,
  } = methods;

  function handleOnChangePhone(phone) {
    console.log(phone);
  }

  const onSubmit = (data) => {
    let { telephone } = data;
    telephone = telephone.substring(1);
    let isValid = isPhoneValid(telephone);
    isValid ? setPhoneValid(true) : setPhoneValid(false);
    console.log(data);
    setCookies(); // sets cookies after user submits form
    navigate('/scanner');
  };

  function nextHandler() {
    dispatch(increment());
    setNextDisabled(true);
    setNavigationButtonStyles(disabledButtonStyles);
  }

  function previousHandler() {
    if (activeStep === 1 && name.length > 2) {
      if (name.length > 2) {
        setNextDisabled(false);
        setNavigationButtonStyles(enabledButtonStyles);
      }
    } else if (activeStep === 2 && phone.length > 0) {
      setPhoneValue('');
      setNextDisabled(true);
      setNavigationButtonStyles(disabledButtonStyles);
    };
    dispatch(decrement());

  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setNameValue(value.name);
      if (value.name.length < 2) {
        setNextDisabled(true);
        setNavigationButtonStyles(disabledButtonStyles);
      } else {
        setNextDisabled(false);
        setNavigationButtonStyles(enabledButtonStyles);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch('name')])
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setPhoneValue(value.telephone);
      if (value.telephone.length < 11) {
        setNextDisabled(true);
        setNavigationButtonStyles(disabledButtonStyles);
      } else {
        setNextDisabled(false);
        setNavigationButtonStyles(enabledButtonStyles);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch('telephone')])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setEmailValue(value.email);
      const valid = isEmailValid(value.email);
      if (!valid) {
        setSubmitDisabled(true);

      } else {
        setSubmitDisabled(false);

      }
    });
    return () => subscription.unsubscribe();
  }, [watch('email')])

  function enterHandler(data) {
    if (window.event.keyCode === 13) {
      if (activeStep === 0) {
        if (name.length > 2) {
          nextHandler();
        }
      } else if (activeStep === 1) {
        if (phone.length >= 11) {
          nextHandler();
        }
      } else if (activeStep === 2) {
        if (email.length > 0 && isEmailValid(email)) {
          handleSubmit(onSubmit)();
        }
      }
    }
  }

  function onCheckBoxHandler(){
    console.log(!userAgreedToTermsAndConditions)
      setUserAgreedToTermsAndConditions(!userAgreedToTermsAndConditions);
  }


console.log(errors)
  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => enterHandler()}>
          {activeStep === 0 && <FormInput
            name="name"
            label="Name"
            required={true}
            errorobj={errors}
            value={name}
            sx={{ margin: '1rem 0' }}
            className='inputAnimation'
          />}

          {activeStep === 1 && <PhoneNumberInput
            name="telephone"
            required={true}
            errorobj={errors}
            sx={{ margin: '1rem 0' }}

            className='inputAnimation'
          />}

          {/*<p style={{color:'red'}}>{phoneValid?'':'The telephone you have enter is not valid'}</p>*/}

          {activeStep === 2 && <FormInput
            name="email"
            label="Enter your email"
            required={true}
            errorobj={errors}
            sx={{ margin: '1rem 0' }}
            value={email}
            className='inputAnimation'
          />}
          <Box sx={{ width: '100%', position: 'relative', }}>
            {activeStep >= 1 && <IconButton sx={{ ...enabledButtonStyles, positon: 'absolute', left: '0%' }} onClick={previousHandler} disabled={previousDisabled}>
              <ArrowBackIosIcon fontSize="10px" />
            </IconButton>}
            {(activeStep === 2) && <Button disabled={submitDisabled} sx={{ position: 'absolute', left: '75%', backgroundColor: '#ff4c00', color: '#fff',width:'2rem', height:'2rem' , '&:hover': { backgroundColor: '#000' } }} type="submit" variant="contained">
              Submit
            </Button>}
            {activeStep <= 1 && <IconButton onClick={nextHandler} sx={{ ...navigationButtonStyles, position: 'absolute', cursor: nextDisabled && 'not-allowed', left: '80%', alignItems:'center', justifyContent:'center' }} disabled={nextDisabled}>
              <ArrowForwardIosIcon  />
            </IconButton>}
          </Box>

          {
            activeStep == 0 && <Box sx={{ padding: '4rem 0 0 0 ', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: '10px' }}>
                <input
                  type="checkbox"
                  name="selectCheckbox"
                  id="selectCheckbox"
                  
                  {...register('agree_to_terms_and_conditions')}
                  className={`form-check-input ${errors.agree_to_terms_and_conditions ? 'is-invalid' : ''
                    }`}
                    
                />

               
                
              </Box>
              <Box>
                I agree to the <a href="#" style={{ color: 'orange' }}>Terms and Conditions</a> & <a href="#" color="orange" style={{ color: 'orange' }}>Privacy Policy</a>
              </Box>
            </Box>
          }
        </form>
      </FormProvider>
    </Box>
  );
};

export default Form;
