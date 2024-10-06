// "use client";
import Pagenation from "@/components/admi/customers/Pagenation";
import SearchBar from "@/components/admi/customers/SearchBar";
import TablesCustomers from "@/components/admi/customers/TablesCustomers";
import { getCustomersWithPagination } from "@/serverActions/customers/getCustomersWithPaginationAction";
import { ICustomer } from "@/typings/interfaces";
import SelectPerPage from "@/components/admi/ui/SelectPerPage";
import Breadcrumb from "@compo/admi/ui/Breadcrumb";

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    page: string | string[] | undefined;
    per_page: string | string[] | undefined;
  };
}) {
  const { search, page, per_page } = searchParams; 
  const currentPage = page ?? 1;
  const itemsPerPage = per_page ?? 5;
  const customerssWithPagination: ICustomer[] | undefined =
    await getCustomersWithPagination(search, currentPage, itemsPerPage); // get all products from the database.
  const customers = customerssWithPagination;

  return (
    <div className="p-4">
      <div className="">
        <Breadcrumb/>
      </div>
      <h2>All customers</h2>
      <div className=""></div>
      {/* Table all users */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 p-2 flex justify-between">
          <div className="flex gap-2 justify-between items-center">
            <SelectPerPage page={currentPage} />
            <SearchBar />
          </div>
        </div>
        <TablesCustomers customers={customers!} />
        <Pagenation searchParams={searchParams} />
      </div>
    </div>
  );
}
