import React, {useState} from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number"; // https://www.npmjs.com/package/material-ui-phone-number
import { useSelector } from "react-redux";

const PhoneNumberInput = (props) => {
  const userCountry = useSelector((state) => state.userCountry.code);
  const { control } = useFormContext();
  const { name, label, required, errorobj, sx, value, className } = props;
  const [phoneValue, setPhoneValue] = useState(value)
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  function handleOnPhoneChange(phone){
    setPhoneValue(phone)
  }

 
console.log(userCountry)
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const fieldWithValueRemoved = delete field["value"]; // solves the error:  A component is changing an uncontrolled input to be controlled
        return (
          <MuiPhoneNumber
            defaultCountry={userCountry}
            variant="outlined"
            fullWidth={true}
            required
            {...field}
            sx={sx}
            value={phoneValue}
            InputLabelProps={{
              className: required ? "required-label" : "",
              required: required || false,
            }}
            error={isError}
            helperText={errorMessage}
            {...props}
            className={className}
          />
        );
      }}
    />
  );
};

export default PhoneNumberInput;
