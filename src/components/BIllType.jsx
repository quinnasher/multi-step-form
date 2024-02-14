function BillType({ img, billName, billFormat, freeMonth, onClick }) {
  return (
    <section onClick={onClick}
             className={"flex items-start gap-4 border-[1.5px]  cursor-pointer border-nLightGray md:inline-block min-h-[4rem] md:min-h-32 w-full md:w-[8.5rem]  py-3 rounded-lg pl-3"}>
      <img className={"object-contain max-w-[2.5rem] md:mb-[2.9rem]"} src={img} alt="" />
      <div className={""}>
        <h2 className={"capitalize font-bold text-pMarineBlue text-sm"}>{billName}</h2>
        <div className={"pt3"}>
          <h3 className={"text-nCoolGray font-medium text-sm"}>{billFormat}</h3>
          <span className={"text-pPurplishBlue font-bold text-sm"}>{freeMonth}</span>
        </div>
      </div>
    </section>
  );
}

export default BillType;