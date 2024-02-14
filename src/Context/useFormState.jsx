// useFormStates.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import findLocation from "./contextFunctions/findLocation.js";
import validateRoute from "./contextFunctions/validateRoute.js";
import findLocationIndex from "./contextFunctions/findLocationIndex.js";

const useFormStates = () => {
  const location = useLocation();
  const [formRoutes] = useState(["/", "/select-plan", "/add-on", "/submit"]);
  const [formRouteStatus, setFormRouteStatus] = useState([true, false, true, true]);
  const [canProceed, setCanProceed] = useState(false);
  const [nextRouteIndex, setNextRouteIndex] = useState(1);
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);
  const [isRouteClicked, setIsRouteClicked] = useState(false);
  // user Personal data
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [inputFieldStatus, setInputFieldStatus] = useState([false, false, false]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  // Select Plan Context
  const [billOption, setBillOption] = useState("monthly");
  const [isBillOptionYearly, setIsBillOptionYearly] = useState(false);

  // useEffect(() => {
  //   if (previousCount < count) {
  //     setPreviousCount(count);
  //     console.log("Route has been clicked");
  //     setIsRouteClicked(true);
  //   } else {
  //     setIsRouteClicked(false);
  //     console.log(isRouteClicked);
  //   }
  // }, [count, isRouteClicked]);

  const handleIsRouteClicked = () => {
    setCount(count + 1);
    if (previousCount < count) {
      setIsRouteClicked(true);
      setPreviousCount(count);
      console.log(isRouteClicked);
      console.log(previousCount, count);
    } else {
      // console.log(previousCount, count);
      setIsRouteClicked(false);
      console.log(isRouteClicked);
    }
  };

  const useFindNextLocationIndex = (nextRoute = 0) => {
    return findLocationIndex(formRoutes, location) + nextRoute;
  };

  const useFindPreviousLocationIndex = (previousRoute = 0) => {
    const previousLocation = findLocationIndex(formRoutes, location) - previousRoute;
    if (previousLocation < 0) return;
    return previousLocation;
  };

  const useFindLocation = () => {
    return findLocation(formRoutes, location);

  };
  const useValidateRoute = (canProceed, routeIndex) => {
    useEffect(() => {
      validateRoute(canProceed, routeIndex, formRoutes, formRouteStatus, setFormRouteStatus);
    }, [canProceed, routeIndex]);
  };

  const moveNextRoute = (nextLocation) => {
    if (!canProceed) return;
    return formRoutes[nextLocation];
  };
  const movePreviousRoute = (previousLocation) => {
    // if (!canProceed)
    return formRoutes[previousLocation];
  };

  return {
    billOption,
    canProceed,
    count,
    formRouteStatus,
    formRoutes,
    handleIsRouteClicked,
    inputFieldStatus,
    isBillOptionYearly,
    isEmailValid,
    isInputEmpty,
    isPhoneNumberValid,
    isRouteClicked,
    location,
    moveNextRoute,
    movePreviousRoute,
    nextRouteIndex,
    setBillOption,
    setCanProceed,
    setCount,
    setInputFieldStatus,
    setIsBillOptionYearly,
    setIsEmailValid,
    setIsInputEmpty,
    setIsPhoneNumberValid,
    setIsRouteClicked,
    setNextRouteIndex,
    setUserEmail,
    setUserName,
    setUserPhoneNumber,
    useFindLocation,
    useFindNextLocationIndex,
    useFindPreviousLocationIndex,
    useValidateRoute,
    userEmail,
    userName,
    userPhoneNumber
  };
};

export default useFormStates;
