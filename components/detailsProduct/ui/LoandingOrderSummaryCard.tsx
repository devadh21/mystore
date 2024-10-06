function LoandingOrderSummaryCard() {
  return (
    <div className="animate-pulse flex flex-col gap-4   p-4   w-full   ">
      <div className="flex justify-center">
        <h1 className="h-5 w-60 bg-gray-200"></h1>
      </div>
      <hr className="my-1 bg-gray-300  border-2 mx-4 " />
      <div className="flex flex-col gap-4 basis-1/3">
        <div className="flex justify-end">
          <div className="h-5 w-20 bg-gray-200"></div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="h-5 w-20 bg-gray-200"></div>
          <div className="h-5 w-60 bg-gray-200"></div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="h-5 w-20 bg-gray-200"></div>
          <div className="h-10 w-40 bg-gray-200"></div>
        </div>
      </div>
      <hr className="my-1 bg-gray-300  border-2 mx-4  " />
      <div className="flex flex-col gap-4 basis-1/3">
        <div className="flex justify-between gap-4">
          <div className="h-5 w-20 bg-gray-200"></div>
          <div className="h-5 w-20 bg-gray-200"></div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="h-5 w-20 bg-gray-200"></div>
          <div className="h-5 w-20 bg-gray-200"></div>
        </div>
      </div>
      <hr className="my-1 bg-gray-300  border-2 mx-4 " />
      <div className="flex flex-col gap-4 basis-1/3">
        <div className="flex justify-between gap-4">
          <div className="h-5 w-20 bg-gray-200"></div>
          <div className="h-5 w-20 bg-gray-200"></div>
        </div>
        <div className="flex justify-center p-4">
          <div className="h-10 w-full bg-gray-200 "></div>
        </div>
      </div>
    </div>
  );
}

export default LoandingOrderSummaryCard;
