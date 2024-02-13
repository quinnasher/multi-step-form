import SideNav from "./SideNav.jsx";
import sideBarText from "../data/sideBarText.js";
import Button from "./Button.jsx";
import { useContext, useEffect, useState } from "react";
import FormContext from "../Context/FormContext.jsx";
import { Link } from "react-router-dom";

function FormLayout({ children }) {
  const {

    useFindPreviousLocationIndex,
    useFindNextLocationIndex,
    movePreviousRoute,
    moveNextRoute
  } = useContext(FormContext);

  const nextLocation = useFindNextLocationIndex(1);
  const previousLocation = useFindPreviousLocationIndex(1);


  return (
    <main className={" relative md:min-w-min min-w-[300px] h-[812px] md:h-screen bg-white md:bg-nMagnolia flex justify-center md:items-center"}>
      <div className={" relative bg-nMagnolia md:bg-nWhite w-full flex flex-col   md:shadow-lg md:flex-row  h-[70%] md:w-[70%] md:rounded-lg md:justify-between md:h-[80%]"}>
        <nav className={" md:w-[30%] min-w-full md:min-w-0  h-[30%] md:mt-3 md:h-[95%] md:ml-3"}>
          <SideNav sideNavText={sideBarText} />
        </nav>
        <div className={"absolute left-0 right-0 top-[6.2rem] md:static bg-nWhite w-[90%] md:w-[40.9%] md:shadow-none shadow-lg px-4 p-6 md:py-0 md:rounded-none rounded-lg md:px-0 mx-auto md:mt-12"}>
          {children}
        </div>
      </div>

      <div className={"absolute flex justify-between w-[90%] bottom-[11.5rem] md:w-[28.55%] md:bottom-[4.56rem] md:right-[19.75rem]"}>
        <Link to={movePreviousRoute(previousLocation)}>
          <Button text={"Go Back"} btnStyle={"text-nCoolGray font-bold"}></Button>
        </Link>
        <Link to={moveNextRoute(nextLocation)}>
          <Button text={"Next Step"} btnStyle={"next-btn"}></Button>
        </Link>
      </div>
    </main>
  );
}

export default FormLayout;