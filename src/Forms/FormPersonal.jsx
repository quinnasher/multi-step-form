import { useState, useContext, useEffect } from "react";
import FormContext from "../Context/FormContext.jsx";
import FormLayout from "../components/FormLayout.jsx";

function FormPersonal({ personalInfo }) {
  const {
    setCanProceed,
    setRouteIndex,
    useFindLocationIndex
  } = useContext(FormContext);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);


  useEffect(() => {
    setRouteIndex(useFindLocationIndex);
  }, [setRouteIndex, useFindLocationIndex]);

  useEffect(() => {
    setCanProceed(shouldProceed => {
      return isInputActive && isNameValid && isEmailValid && isPhoneNumberValid;
    });
  }, [isEmailValid, isInputActive, isNameValid, isPhoneNumberValid, setCanProceed]);
  const handleFocus = () => {
    setIsInputActive(true);
  };

  const handleBlur = () => {
    setIsInputActive(false);
  };


  //FIXME : handle the situation when a user enters an invalid input
  const handleInvalidInput = () => {

  };

  return (
    <FormLayout>
      <div>
        <h1 className={"text-pMarineBlue   font-bold text-2xl mb-3"}>{personalInfo.title}</h1>
        <h2 className={"text-nCoolGray text-1rem md:text-sm mb-3"}>{personalInfo.description}</h2>
      </div>
      <form className={"flex flex-col gap-3 font-medium capitalize"}>
        <fieldset className={"flex flex-col "}>
          <label className={"text-pMarineBlue"} htmlFor="userName">{personalInfo.nameField.name}</label>
          <input
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`${isInputActive ? "input-active" : ""} ` + "input"}
            type="text"
            placeholder={personalInfo.nameField.namePlaceholder} />
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue"} htmlFor="userEmail">{personalInfo.emailField.email}</label>
          <input className={"input input-invalid"}
                 type="email"
                 placeholder={personalInfo.emailField.emailPlaceholder} />
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue"} htmlFor="userPhoneNum">{personalInfo.phoneField.phone}</label>
          <input className={"input input-active"}
                 type="text"
                 placeholder={personalInfo.phoneField.phonePlaceholder} />
        </fieldset>
      </form>
    </FormLayout>
  );
}

export default FormPersonal;
