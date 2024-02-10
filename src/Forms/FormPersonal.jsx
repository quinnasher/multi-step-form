import { useState, useContext, useEffect } from "react";
import FormContext from "../Context/FormContext.jsx";
import FormLayout from "../components/FormLayout.jsx";

function FormPersonal({ personalInfo }) {
  const {
    setCanProceed,
    setRouteIndex,
    routeIndex,
    useFindLocationIndex
  } = useContext(FormContext);

  const [isInputActive, setIsInputActive] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [inputFieldType, setInputFieldType] = useState("test");
  const nextRouteLocation = useFindLocationIndex(1);

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
            className={`${isInputActive && inputFieldType === "text" ? "input-active" : ""} ` + "input"}
            type="text"
            placeholder={personalInfo.nameField.namePlaceholder} />
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue"} htmlFor="userEmail">{personalInfo.emailField.email}</label>
          <input className={`${isInputActive && inputFieldType === "email" ? "input-active" : ""} ` + "input"}
                 onBlur={handleBlur}
                 onFocus={handleFocus}
                 type="email"
                 placeholder={personalInfo.emailField.emailPlaceholder} />
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue"} htmlFor="userPhoneNum">{personalInfo.phoneField.phone}</label>
          <input className={`${isInputActive && inputFieldType === "tel" ? "input-active" : ""} ` + "input"}
                 onBlur={handleBlur}
                 onFocus={handleFocus}
                 type="tel"
                 placeholder={personalInfo.phoneField.phonePlaceholder} />
        </fieldset>
      </form>
    </FormLayout>
  );
}

export default FormPersonal;
