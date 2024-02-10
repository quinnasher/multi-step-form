import { useContext, useEffect, useState } from "react";
import FormContext from "../Context/FormContext.jsx";

function usePersonalFormState() {

  const {
    setCanProceed,
    setRouteIndex,
    useFindLocationIndex
  } = useContext(FormContext);

  const [isInputActive, setIsInputActive] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [inputFieldType, setInputFieldType] = useState("test");
  const nextRouteLocation = useFindLocationIndex(1);

  // user data
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, serUserPhoneNumber] = useState("");

  useEffect(() => {
    setRouteIndex(nextRouteLocation);
  }, [nextRouteLocation, setRouteIndex, useFindLocationIndex]);

  useEffect(() => {
    setCanProceed(() => {
      return isNameValid && isEmailValid && isPhoneNumberValid;
    });
  }, [isEmailValid, isNameValid, isPhoneNumberValid, setCanProceed]);


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
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length === 0) {
      setIsEmailValid(true);
      return;
    }
    setIsEmailValid(isValid.test(email));
  };


  return {
    isInputActive,
    setIsInputActive,
    isNameValid,
    setIsNameValid,
    isPhoneNumberValid,
    setIsPhoneNumberValid,
    inputFieldType,
    setInputFieldType,
    nextRouteLocation
  };
}

export default usePersonalFormState;