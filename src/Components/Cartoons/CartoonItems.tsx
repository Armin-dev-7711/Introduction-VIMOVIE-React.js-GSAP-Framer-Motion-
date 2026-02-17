import React from "react";
import { useSearchParams } from "react-router";
// import PaginationCartoons from "./PaginationCartoons";
import Pagination from "../Movies/Pagination";

const Cartoons: { name: string }[] = Array.from({ length: 200 }, (_, i) => {
  return { name: `Anime ${i + 1}` };
});

const visibleItems = 12;

const CartoonItems: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage: number = Number(searchParams.get("page") || 1);

  function setPagination(value: number) {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  }

  const startIndex: number = (currentPage - 1) * visibleItems;
  const visibleCartoon = Cartoons.slice(startIndex, startIndex + visibleItems);

  return (
    <div className='w-full space-y-12 mt-12'>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4'>
        {visibleCartoon.map((item, index) => (
          <div
            key={index}
            className='w-full bg-button text-2xl sm:text-3xl uppercase font-Anton flex justify-center items-center h-[500px] rounded-sm'
          >
            {item.name}
          </div>
        ))}
      </div>
      {/* <PaginationCartoons
        itemsLength={Cartoons.length}
        setPagination={setPagination}
        currentPage={currentPage}
        visibleItems={visibleItems}
      /> */}
      <Pagination
        totalItems={Cartoons.length}
        currentPage={currentPage}
        onPageChange={setPagination}
        itemsPerPage={visibleItems}
      />
    </div>
  );
};

export default CartoonItems;
