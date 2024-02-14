import FormLayout from "../components/FormLayout.jsx";
import usePersonalFormState from "./formStates/usePersonalFormState.js";
import { useContext } from "react";
import FormContext from "../Context/FormContext.jsx";

function FormPersonal({ personalInfo }) {

  const {
    handleBlur,
    handleFocus,
    handleEmail,
    handleUserName,
    handlePhoneNumber,
    isInputActive,
    inputFieldType,
    isEmailValid,
    userEmail,
    userName,
    userPhoneNumber
  } = usePersonalFormState();

  const {
    isRouteClicked
  } = useContext(FormContext);

  const isEmailEmpty = userEmail.length === 0;
  const isNameEmpty = userName.length === 0;
  const isPhoneEmpty = userPhoneNumber.length === 0;
  const emptyFieldMsg = "This field is required";

  return (
    <FormLayout>
      <div>
        <h1 className={"text-pMarineBlue   font-bold text-2xl mb-3"}>{personalInfo.title}</h1>
        <h2 className={"text-nCoolGray text-1rem md:text-sm mb-3"}>{personalInfo.description}</h2>
      </div>
      <form className={"relative flex flex-col gap-3 font-medium capitalize"}>
        <fieldset className={"flex flex-col "}>
          <label className={"text-pMarineBlue font-normal"} htmlFor="userName">{personalInfo.nameField.name}</label>
          <input
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleUserName}
            className={`${isInputActive && inputFieldType === "text" ? "input-active" : ""}  ${isRouteClicked && isNameEmpty ? " input-invalid " : ""}` + "input "}
            type="text"
            value={userName}
            placeholder={personalInfo.nameField.namePlaceholder} />
          <div className={`error ${isRouteClicked && isNameEmpty ? " name-error" : ""}`}>
            <span className={"uppercase"}>{emptyFieldMsg.at(0)}</span>{emptyFieldMsg.slice(1)}
          </div>
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue font-normal"} htmlFor="userEmail">{personalInfo.emailField.email}</label>
          <input className={`${isInputActive && inputFieldType === "email" ? "input-active " : " "} ${isEmailValid || isEmailEmpty ? " " : "invalid-email "} ${isRouteClicked && isEmailEmpty ? " input-invalid " : ""}` + "input"}
                 onBlur={handleBlur}
                 onFocus={handleFocus}
                 onChange={handleEmail}
                 type="email"
                 value={userEmail}
                 placeholder={personalInfo.emailField.emailPlaceholder} />
          <div className={`error ${isRouteClicked && isEmailEmpty ? " email-error" : ""}`}>
            <span className={"uppercase"}>{emptyFieldMsg.at(0)}</span>{emptyFieldMsg.slice(1)}
          </div>
        </fieldset>
        <fieldset>
          <label className={"text-pMarineBlue font-normal"}
                 htmlFor="userPhoneNum">{personalInfo.phoneField.phone}</label>
          <input className={`${isInputActive && inputFieldType === "tel" ? "input-active" : ""} ${isRouteClicked && isPhoneEmpty ? " input-invalid " : ""}` + "input"}
                 onBlur={handleBlur}
                 onFocus={handleFocus}
                 onChange={handlePhoneNumber}
                 value={userPhoneNumber}
                 type="tel"
                 placeholder={personalInfo.phoneField.phonePlaceholder} />
          <div className={`error ${isRouteClicked && isPhoneEmpty ? " phone-error" : ""}`}>
            <span className={"uppercase"}>{emptyFieldMsg.at(0)}</span>{emptyFieldMsg.slice(1)}
          </div>
        </fieldset>
      </form>
    </FormLayout>
  );
}

export default FormPersonal;
