import FormLayout from "../components/FormLayout.jsx";
import usePersonalFormState from "./formStates/usePersonalFormState.js";
import { useContext } from "react";
import FormContext from "../Context/FormContext.jsx";
import findLocationIndex from "../Context/contextFunctions/findLocationIndex.js";

function FormPersonal({ personalInfo }) {

  const {
    handleBlur,
    handleFocus,
    handleEmail,
    handleUserName,
    isInputActive,
    inputFieldType,
    isEmailValid,
    userEmail,
    userName,
    userPhoneNumber
  } = usePersonalFormState();

  const {
    useValidateRoute,
    useFindLocationIndex,
    formRouteStatus,
    canProceed,
    setCanProceed,
    routeIndex,
    setRouteIndex
  } = useContext(FormContext);

  // setCanProceed(true);
  // setRouteIndex(1);
  useValidateRoute(true, 1);
  console.log(useValidateRoute);
  console.log(formRouteStatus);

  const isEmailEmpty = userEmail.length === 0;
  const isNameEmpty = userName.length === 0;
  const isPhoneEmpty = userPhoneNumber.length === 0;

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
            onChange={handleUserName}
            className={`${isInputActive && inputFieldType === "text" ? "input-active" : ""} ` + "input"}
            type="text"
            // value={user}
            placeholder={personalInfo.nameField.namePlaceholder} />
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue"} htmlFor="userEmail">{personalInfo.emailField.email}</label>
          <input className={`${isInputActive && inputFieldType === "email" ? "input-active " : " "} ${isEmailValid || isEmailEmpty ? " " : "invalid-email "} ` + "input"}
                 onBlur={handleBlur}
                 onFocus={handleFocus}
                 onChange={handleEmail}
                 type="email"
                 value={userEmail}
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
