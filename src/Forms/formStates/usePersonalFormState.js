import { useContext, useEffect, useState } from "react";
import FormContext from "../../Context/FormContext.jsx";

function usePersonalFormState() {

  const {
    useFindNextLocationIndex,
    useValidateRoute,
    userEmail,
    userName,
    userPhoneNumber,
    setUserName,
    setUserPhoneNumber,
    setUserEmail,
    canProceed,
    setCanProceed,
    nextRouteIndex,
    setNextRouteIndex,
    isInputEmpty,
    setIsInputEmpty,
    formRouteStatus,
    isPhoneNumberValid,
    setIsPhoneNumberValid,
    isEmailValid,
    setIsEmailValid
  } = useContext(FormContext);

  const [isInputActive, setIsInputActive] = useState(false);
  const [inputFieldType, setInputFieldType] = useState("");
  const nextRouteLocationIndex = useFindNextLocationIndex(1);
  const [isNameEmpty, setIsNameEmpty] = useState(true);

  useEffect(() => {
    setIsInputEmpty(userName.length > 0 && userEmail.length > 0 && userPhoneNumber.length > 0);
  }, [setIsInputEmpty, userEmail.length, userName.length, userPhoneNumber.length]);


  useEffect(() => {
    setCanProceed(() => {
      // console.log("isInputEmpty value " + isInputEmpty);
      return isPhoneNumberValid && isEmailValid && isInputEmpty;
    });
    setNextRouteIndex(nextRouteLocationIndex);
  }, [formRouteStatus, isEmailValid, isInputEmpty, isPhoneNumberValid, nextRouteLocationIndex, setCanProceed, setNextRouteIndex]);
  useValidateRoute(canProceed, nextRouteIndex);


  const handleFocus = (event) => {
    setIsInputActive(true);
    setInputFieldType(event.target.type);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    setIsEmailValid(isValid);
    setUserEmail(email);
  };

  const handleUserName = (event) => {
    const name = event.target.value;
    setUserName(name);
  };

  const handlePhoneNumber = (event) => {
    const phoneNumber = event.target.value;
    if (phoneNumber.length >= 10 && phoneNumber.length <= 11) {
      setIsPhoneNumberValid(true);
      // console.log("OnChange event is triggered and Phone validation is " + isPhoneNumberValid);
    } else {
      setIsPhoneNumberValid(false);
      // console.log("OnChange event is triggered and Phone validation is " + isPhoneNumberValid);
    }
    setUserPhoneNumber(phoneNumber);
  };


  return {
    isEmailValid,
    isInputEmpty,
    isInputActive,
    setIsInputActive,
    isPhoneNumberValid,
    setIsPhoneNumberValid,
    inputFieldType,
    setInputFieldType,
    handleBlur,
    handleFocus,
    handleEmail,
    handleUserName,
    handlePhoneNumber,
    userEmail,
    userName,
    userPhoneNumber,
    setUserName,
    setUserPhoneNumber,
    setUserEmail
  };
}

export default usePersonalFormState;