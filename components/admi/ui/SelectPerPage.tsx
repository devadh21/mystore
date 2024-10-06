"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SelectPerPage({ page }: any) {
  const router = useRouter();
  const handleChange = (e: any) => {
    router.push(`?page=${page}&per_page=${e.target.value}`);
  };

  return (
    <select
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
}

export default SelectPerPage;
