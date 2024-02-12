import SideNav from "./SideNav.jsx";
import sideBarText from "../data/sideBarText.js";
import Button from "./Button.jsx";

function FormLayout({ children }) {
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

      <div className={"absolute flex justify-between w-[90%] bottom-44 md:w-[28.55%] md:bottom-[4.56rem] md:right-[19.75rem]"}>
        <Button text={"Go Back"} btnStyle={"text-nCoolGray font-bold"}></Button>
        <Button text={"Next Step"} btnStyle={"next-btn"}></Button>
      </div>
    </main>
  );
}

export default FormLayout;