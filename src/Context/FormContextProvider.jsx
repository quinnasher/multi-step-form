import FormContext from "./FormContext.jsx";
import useFormState from "./useFormState.jsx";

function FormContextProvider({ children }) {
  return (
    <FormContext.Provider value={useFormState()}>{children}</FormContext.Provider>
  );
}

export default FormContextProvider;