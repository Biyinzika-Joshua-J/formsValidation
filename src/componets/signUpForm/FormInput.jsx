import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInput = (props) => {
  const { control } = useFormContext();
  const { name, label, required, errorobj, sx, value } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }


  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const  fieldWithValueRemoved = delete field['value']; // solves the error:  A component is changing an uncontrolled input to be controlled
        return (
          <TextField
            fullWidth
            label={label}
            required
            {...field}
            value={value}
            InputLabelProps={{
              className: required ? "required-label" : "",
              required: required || false,
            }}
            error={isError}
            helperText={errorMessage}
            {...props}
            sx={sx}
          />
        );
      }}
    />
  );
};

export default FormInput;
