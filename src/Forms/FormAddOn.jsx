import FormLayout from "../components/FormLayout.jsx";
import { useContext } from "react";
import FormContext from "../Context/FormContext.jsx";

function FormAddOn({ personalInfo }) {

  const { formRouteStatus } = useContext(FormContext);
  console.log(formRouteStatus);

  return (
    <FormLayout>

    </FormLayout>
  );
}

export default FormAddOn;
