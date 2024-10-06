function LoandingOrderSummaryCard() {
  return (
    <div className="">
      <div className="animate-pulse shadow p-6   ">
        <div className=" flex justify-center">
        <h2
          className=" mb-6 flex justify-center bg-gray-200   rounded  " 
          style={{ height: "10px", width: "150px" }}
        ></h2>
        </div>
        <hr className=" bg-gray-300  border-2" />
        <div className="flex flex-col sm:flex-row  justify-between my-4">
          <div className="flex flex-col   justify-center items-center">
            <h2
              className="bg-gray-200 rounded"
              style={{ height: "10px", width: "50px" }}
            ></h2>
            <div
              className="bg-gray-200 mt-2"
              style={{ height: "160px", width: "160px" }}
            ></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-between gap-5">
              <div className="flex justify-between items-center gap-1 ">
                <input type="radio" className=" bg-gray-200" />
                <label
                  className="bg-gray-200 rounded"
                  style={{ height: "10px", width: "50px" }}
                ></label>
              </div>
              <div className="flex justify-between items-center gap-1">
                <input type="radio" className=" bg-gray-200" />
                <label
                  htmlFor="half_kg"
                  className="bg-gray-200 rounded"
                  style={{ height: "10px", width: "50px" }}
                ></label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className=""></div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <span
            className="bg-gray-200 rounded"
            style={{ height: "10px", width: "50px" }}
          ></span>
          <span
            className="bg-gray-200 rounded"
            style={{ height: "10px", width: "50px" }}
          ></span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span
            className="bg-gray-200 rounded"
            style={{ height: "10px", width: "50px" }}
          ></span>
          <span
            className="bg-gray-200 rounded"
            style={{ height: "10px", width: "50px" }}
          ></span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <span
            className="bg-gray-200 rounded"
            style={{ height: "10px", width: "50px" }}
          ></span>
          <span
            className="bg-gray-200 rounded"
            style={{ height: "10px", width: "50px" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default LoandingOrderSummaryCard;
