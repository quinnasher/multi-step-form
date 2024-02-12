import { useContext, useEffect, useState } from "react";
import FormContext from "../../Context/FormContext.jsx";

function usePersonalFormState() {

  const {

    useFindLocationIndex,
    userEmail,
    userName,
    userPhoneNumber,
    setUserName,
    setUserPhoneNumber,
    setUserEmail
  } = useContext(FormContext);

  const [isInputActive, setIsInputActive] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [inputFieldType, setInputFieldType] = useState("");
  const nextRouteLocation = useFindLocationIndex(1);

  // user data


  // useEffect(() => {
  //   setRouteIndex(nextRouteLocation);
  // }, [nextRouteLocation, setRouteIndex, useFindLocationIndex]);
  //
  // useEffect(() => {
  //   setCanProceed(() => {
  //     return isNameValid && isEmailValid && isPhoneNumberValid;
  //   });
  // }, [isEmailValid, isNameValid, isPhoneNumberValid, setCanProceed]);

  // useEffect(() => {
  //
  // }, []);

  const handleFocus = (event) => {
    setIsInputActive(true);
    setInputFieldType(event.target.type);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };

  const handleUserName = (event) => {
    const change = event.target.value;
    if (!change) setIsNameValid(false);
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    setIsEmailValid(isValid);
    console.log(isValid);
    setUserEmail(email);
  };


  return {
    isEmailValid,
    isInputEmpty,
    isInputActive,
    setIsInputActive,
    isNameValid,
    setIsNameValid,
    isPhoneNumberValid,
    setIsPhoneNumberValid,
    inputFieldType,
    setInputFieldType,
    nextRouteLocation,
    handleBlur,
    handleFocus,
    handleEmail,
    userEmail,
    userName,
    userPhoneNumber,
    setUserName,
    setUserPhoneNumber,
    setUserEmail
  };
}

export default usePersonalFormState;