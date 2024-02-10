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
  const [canProceed, setCanProceed] = useState(false);
  const [routeIndex, setRouteIndex] = useState(0);

  const useFindLocation = () => {
    return findLocation(formRoutes, location);

  };

  const useFindLocationIndex = (nextRoute = 0) => {
    return findLocationIndex(formRoutes, location) + nextRoute;
  };

  const useValidateRoute = (canProceed, routeIndex) => {
    useEffect(() => {
      console.log(formRouteStatus);
      validateRoute(canProceed, routeIndex, formRoutes, formRouteStatus, setFormRouteStatus);
    }, [canProceed, routeIndex]);
  };


  return {
    canProceed,
    setCanProceed,
    routeIndex,
    setRouteIndex,
    formRoutes,
    formRouteStatus,
    useFindLocationIndex,
    useFindLocation,
    useValidateRoute
  };
};

export default useFormStates;
