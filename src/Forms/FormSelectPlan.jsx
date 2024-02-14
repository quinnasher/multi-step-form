import FormLayout from "../components/FormLayout.jsx";
import { useContext, useEffect } from "react";
import FormContext from "../Context/FormContext.jsx";
import BillType from "../components/BIllType.jsx";

function FormSelectPlan({ selectPlanText }) {
  const {
    billOption,
    setBillOption,
    isBillOptionYearly,
    setIsBillOptionYearly
  } = useContext(FormContext);

  const {
    title,
    description,
    billType,
    determineBillAmount
  } = selectPlanText;

  const {
    arcade,
    advanced,
    pro
  } = billType;


  // useEffect(() => {
  //   determineBillAmount(true);
  // }, [determineBillAmount]);
  determineBillAmount(isBillOptionYearly);


  return (
    <FormLayout>
      <h1 className={"text-pMarineBlue font-bold text-2xl mb-3"}>{title}</h1>
      <h2 className={"text-nCoolGray text-[1.1rem] md:text-sm mb-3"}>{description}</h2>
      <div className={"flex flex-col gap-4 md:gap-0 md:flex-row justify-between"}>
        <BillType img={arcade.billIcon}
                  billName={arcade.billName}
                  billFormat={arcade.billFormat()}
                  freeMonth={arcade.monthFree} />
        <BillType img={advanced.billIcon}
                  billName={advanced.billName}
                  billFormat={advanced.billFormat()}
                  freeMonth={advanced.monthFree} />
        <BillType img={pro.billIcon}
                  billName={pro.billName}
                  billFormat={pro.billFormat()}
                  freeMonth={pro.monthFree} />
      </div>

      <BillOption></BillOption>
    </FormLayout>
  );
}


function BillOption() {
  const {
    billOption,
    setBillOption,
    isBillOptionYearly,
    setIsBillOptionYearly
  } = useContext(FormContext);

  const toggleBillOption = () => {
    setIsBillOptionYearly(!isBillOptionYearly);
  };

  return (<section className={"bg-nAlabaster flex justify-center gap-4 py-2 mt-6"}>
    <span>Monthly</span>
    <span className={"bg-pMarineBlue  px-1 w-12 rounded-2xl flex items-center"}>
      <button onClick={toggleBillOption}
              className={"h-4 w-4 rounded-full bg-white " + `${isBillOptionYearly ? "ml-auto" : "mr-auto"}`}></button>
    </span>
    <span>Yearly</span>
  </section>);

}

export default FormSelectPlan;
