// import React from "react";

// interface PaginationProps {
//   totalItems: number;
//   itemsPerPage: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const getPaginationRange = (): (number | string)[] => {
//     const visiblePages = 5;
//     let pages: (number | string)[] = [];

//     if (totalPages <= visiblePages + 2) {
//       pages = Array.from({ length: totalPages }, (_, i) => i + 1);
//     } else {
//       if (currentPage <= visiblePages) {
//         pages = [
//           ...Array.from({ length: visiblePages }, (_, i) => i + 1),
//           "...",
//           totalPages,
//         ];
//       } else if (currentPage >= totalPages - visiblePages + 1) {
//         pages = [
//           1,
//           "...",
//           ...Array.from(
//             { length: visiblePages },
//             (_, i) => totalPages - visiblePages + i + 1
//           ),
//         ];
//       } else {
//         pages = [
//           1,
//           "...",
//           currentPage - 1,
//           currentPage,
//           currentPage + 1,
//           "...",
//           totalPages,
//         ];
//       }
//     }
//     return pages;
//   };

//   return (
//     <div className='flex items-center space-x-2 mt-4'>
//       {/* دکمه قبلی */}
//       <button
//         className='px-3 py-1 border rounded disabled:opacity-50'
//         disabled={currentPage === 1}
//         onClick={() => onPageChange(currentPage - 1)}
//       >
//         قبلی
//       </button>

//       {/* شماره صفحات */}
//       {getPaginationRange().map((page, index) =>
//         page === "..." ? (
//           <span key={index} className='px-3 py-1'>
//             ...
//           </span>
//         ) : (
//           <button
//             key={index}
//             className={`px-3 py-1 border rounded ${
//               currentPage === page ? "bg-blue-500 text-white" : ""
//             }`}
//             onClick={() => onPageChange(page as number)}
//           >
//             {page}
//           </button>
//         )
//       )}

//       {/* دکمه بعدی */}
//       <button
//         className='px-3 py-1 border rounded disabled:opacity-50'
//         disabled={currentPage === totalPages}
//         onClick={() => onPageChange(currentPage + 1)}
//       >
//         بعدی
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from "react";
import { useProvider } from "../contexts/WebsiteContext";

interface page {
  totalItems: number;
  currentPage: number;
  onPageChange: (value: number) => void;
  itemsPerPage: number;
}

const Pagination: React.FC<page> = ({
  totalItems,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const totalPage: number = Math.ceil(totalItems / itemsPerPage);
  const { SmoothScrollAnimation } = useProvider();

  function setPagination() {
    const visibleItem: number = 5;
    let Pages: (number | string)[] = [];
    if (totalItems <= visibleItem + 2) {
      Pages = Array.from({ length: totalItems }, (_, i) => i + 1);
    } else {
      if (currentPage <= visibleItem) {
        Pages = [
          ...Array.from({ length: visibleItem }, (_, i) => i + 1),
          "...",
          totalPage,
        ];
      } else if (totalPage - visibleItem + 1 <= currentPage) {
        Pages = [
          1,
          "...",
          ...Array.from(
            { length: visibleItem },
            (_, i) => totalPage - visibleItem + i + 1
          ),
        ];
      } else {
        Pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPage,
        ];
      }
    }

    return Pages;
  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex w-full justify-center items-center gap-8 flex-wrap'>
        <div className='max-sm:w-full text-start'>
          <button
            disabled={currentPage === 1}
            className='bg-button w-[80px] h-[50px] rounded-sm inline-flex justify-center items-center cursor-pointer uppercase font-Anton text-h5'
            onClick={() => {
              onPageChange(currentPage - 1);
              SmoothScrollAnimation(2000);
            }}
          >
            Prev
          </button>
        </div>

        <div className='flex gap-4 flex-wrap'>
          {setPagination().map((item, index) =>
            item === "..." ? (
              <span key={index} className='text-texts text-h4'>
                ...
              </span>
            ) : (
              <button
                onClick={() => {
                  onPageChange(item as number);
                  SmoothScrollAnimation(2000);
                }}
                key={index}
                className={`w-[40px] h-[40px] rounded-sm font-Roboto cursor-pointer ${
                  currentPage === item
                    ? "bg-button text-primary font-bold"
                    : "border border-texts text-texts"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
        <div className='max-sm:w-full text-end'>
          <button
            disabled={currentPage === totalPage}
            onClick={() => {
              onPageChange(currentPage + 1);
              SmoothScrollAnimation(2000);
            }}
            className='bg-button w-[80px] h-[50px] rounded-sm inline-flex justify-center items-center cursor-pointer uppercase font-Anton text-h5 '
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
