import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPersonal from "./Forms/FormPersonal.jsx";
import FormAddOn from "./Forms/FormAddOn.jsx";
import FormSelectPlan from "./Forms/FormSelectPlan.jsx";
import FormSubmit from "./Forms/FormSubmit.jsx";
import FormContextProvider from "./Context/FormContextProvider.jsx";
import personalInfo from "./data/personalInfo.js";
import addOnText from "./data/addOnText.js";
import selectPlan from "./data/selectPlan.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <FormContextProvider>
          <Routes>
            <Route path={"/"} element={<FormPersonal personalInfo={personalInfo} />} />
            <Route path={"/select-plan"} element={<FormSelectPlan selectPlanText={selectPlan} />} />
            <Route path={"/add-on"} element={<FormAddOn personalInfo={addOnText} />} />
            <Route path={"/submit"} element={<FormSubmit />} />
          </Routes>
        </FormContextProvider>
      </BrowserRouter>
    </>


  );
}

export default App;
