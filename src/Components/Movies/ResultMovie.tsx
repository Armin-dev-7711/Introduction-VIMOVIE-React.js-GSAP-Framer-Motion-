import React from "react";
import { useSearchParams } from "react-router";
import Pagination from "./Pagination";

const Arr: { name: string }[] = Array.from({ length: 200 }, (_, i) => {
  return { name: `Movie ${i + 1}` };
});

const VisibleItemsPerPage: number = 12;

const ResultMovie: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage: number = Number(searchParams.get("page")) || 1;

  function onPageChange(value: number) {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
    // setSearchParams({ page: value.toString() });
  }

  const startIndex: number = (currentPage - 1) * VisibleItemsPerPage;
  const visibleItems: { name: string }[] = Arr.slice(
    startIndex,
    startIndex + VisibleItemsPerPage
  );
  return (
    <div className='relative w-full space-y-12'>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 mt-12'>
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className='w-full bg-button text-2xl sm:text-3xl uppercase font-Anton flex justify-center items-center h-[500px] rounded-sm'
          >
            {item.name}
          </div>
        ))}
      </div>
      <Pagination
        totalItems={Arr.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
        itemsPerPage={VisibleItemsPerPage}
      />
    </div>
  );
};

export default ResultMovie;
