import React from "react";
import "./stepper.css";
import { Stepper, Step } from "react-form-stepper"; //https://www.npmjs.com/package/react-form-stepper
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const FormStepper = () => {
  const activeStep = useSelector(state => state.step.activeStep);
  return (
    <Box sx={{width:'100%'}}>
      <Box sx={{width:'100%'}}>
        <Stepper
          steps={[
            { label: "Step 1" },
            { label: "Step 2" },
            { label: "Step 3" },
          ]}
          activeStep={activeStep}
      
         
        />
      </Box>
    </Box>
  );
};

export default FormStepper;
