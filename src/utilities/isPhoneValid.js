export function isPhoneValid(phone) {
  const phoneValidationApi = `https://phonevalidation.abstractapi.com/v1/?api_key=cd59e3a34984472ea2559e02b0960b14&phone=${phone}`;
  fetch(phoneValidationApi)
  .then((response) => response.json())
  .then((data) => console.log(data.valid))
  .catch((error) => true);
}
