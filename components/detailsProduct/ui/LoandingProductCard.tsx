const LoandingProductCard = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center   shadow rounded-md     animate-pulse "
        style={{ height: "355px", width: "300px" }}
      >
        <div
          className=" bg-slate-200 rounded  mb-2 "
          style={{ height: "190px", width: "190px" }}
        ></div>
        <h2
          className="   bg-slate-200 rounded   mb-2"
          style={{ height: "10px", width: "96px" }}
        ></h2>
        <div className="  ">
          <h2
            className=" line- bg-slate-200 rounded   mb-2"
            style={{ height: "10px", width: "40px" }}
          ></h2>
          <h2
            className=" bg-slate-200 rounded   mb-2 "
            style={{ height: "10px", width: "50px" }}
          ></h2>
        </div>
        <div className="my-4">
          <div
            className="bg-slate-200 rounded   "
            style={{ height: "10px", width: "70px" }}
          ></div>
        </div>
      </div>
   
    </>
  );
};
export default LoandingProductCard;
