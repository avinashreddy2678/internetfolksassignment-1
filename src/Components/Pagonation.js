import React, { useState } from "react";
import { data } from "./data";
import MyCard from "./Card";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Pagination = () => {
  const totalItems = 6;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [dummyData, setDummyData] = useState(data);

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dummyData.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <ul className="lg:flex block text-center lg:text-start lg:mx-[107px]">
        {getPageItems().map((item) => (
          <div className="mx-[23px]">
            <li key={item.img}>
              <MyCard item={item} />
            </li>
          </div>
        ))}
      </ul>
      <div className="lg:mb-[65px] mb-[65px] text-[#0E2368] text-center">
        <button
          className={`rounded-md p-1 border-2 mr-2 ${
            currentPage === 1
              ? "text-gray-400 border-gray-300"
              : "text-[#0E2368] border-[#0E2368]"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon />
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          className={`rounded-md p-1 border-2 ml-2 ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-300"
              : "text-[#0E2368] border-[#0E2368]"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
