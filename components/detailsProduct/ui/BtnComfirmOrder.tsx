import ButtonAction from "@/elements/ButtonAction";
import Spinner from "@/elements/Spinner";
import { useFormStatus } from "react-dom";

function BtnComfirmOrder() {
  const { pending } = useFormStatus();
  const title_btn:any =pending ? <div className="flex justify-center "><Spinner /> Wait...</div>: "Comfirm Order"

  return (
    <ButtonAction label={title_btn} className="!w-full"  />
  );
}
export default BtnComfirmOrder;
