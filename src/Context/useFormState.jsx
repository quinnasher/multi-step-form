// useFormStates.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import findLocation from "./contextFunctions/findLocation.js";
import validateRoute from "./contextFunctions/validateRoute.js";
import findLocationIndex from "./contextFunctions/findLocationIndex.js";

const useFormStates = () => {
  const location = useLocation();
  const [formRoutes] = useState(["/", "/add-on", "/select-plan", "/submit"]);
  const [formRouteStatus, setFormRouteStatus] = useState([true, false, false, false]);


  // user Personal data
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const useFindLocation = () => {
    return findLocation(formRoutes, location);

  };

  const useFindLocationIndex = (nextRoute = 0) => {
    return findLocationIndex(formRoutes, location) + nextRoute;
  };

  const useValidateRoute = (canProceed, routeIndex) => {
    // console.log("useValidateRoute executed:", canProceed, routeIndex); // Added here!
    // console.log("useValidateRoute useEffect fired:", canProceed, routeIndex);
    useEffect(() => {
      console.log("useValidateRoute useEffect fired:", canProceed, routeIndex);
      // console.log(formRouteStatus);
      validateRoute(canProceed, routeIndex, formRoutes, formRouteStatus, setFormRouteStatus);
    }, [canProceed, routeIndex]);
  };


  return {
    formRoutes,
    location,
    formRouteStatus,
    useFindLocationIndex,
    useFindLocation,
    useValidateRoute,
    userEmail,
    setUserEmail,
    userName,
    setUserName,
    userPhoneNumber,
    setUserPhoneNumber
  };
};

export default useFormStates;
