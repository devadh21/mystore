
import LoandingOrderSummaryCard from "@/components/detailsProduct/ui/LoandingOrderSummaryCard";
import LoadingGallaryImage from "@/components/detailsProduct/ui/LoadingGallaryImage";

export default function LoandingOrder() {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full">
        <LoandingOrderSummaryCard />
        <LoadingGallaryImage/>
        </div>
  )
}
