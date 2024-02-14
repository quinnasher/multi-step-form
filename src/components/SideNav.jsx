import Button from "./Button.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../Context/FormContext.jsx";

function SideNav({ sideNavText }) {
  const {
    formRoutes,
    useFindLocation,
    formRouteStatus,
    count,
    setCount,
    handleIsRouteClicked,
    setIsRouteClicked,
    isRouteClicked
  } = useContext(FormContext);


  const routeName = useFindLocation();


  return (
    <ul className={"flex justify-center  gap-4 md:gap-6 md:flex-col md:justify-normal pt-8 md:pl-8 bg-mobileBgImg md:bg-desktopBgImg min-h-full min-w-full bg-no-repeat bg-cover bg-top  md:bg-center md:rounded-lg overflow-hidden"}>
      {/* eslint-disable-next-line react/prop-types */}
      {sideNavText.map((sideBarEl, index) => (
        <li key={index} className={"flex gap-4 items-"}>
          {/*This function call creates the step values*/}
          {sideBarEl.stepF()}
          <div className={"pt-[6px]"}>

            <Link onClick={() => setIsRouteClicked(true)} to={formRouteStatus[1] ? formRoutes[index] : ""}>
              <Button
                text={sideBarEl.number}
                btnStyle={routeName === formRoutes[index] ? "btn-active" : "btn-not-active"}>
              </Button>

            </Link>
          </div>

          <div className={"hidden md:flex flex-col"}>
            <h1 className={"text-pPastelBlue uppercase font-normal"}>{sideBarEl.step}</h1>
            <h2 className={"text-nWhite font-bold uppercase"}>{sideBarEl.formType}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;