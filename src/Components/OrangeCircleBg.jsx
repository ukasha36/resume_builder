import React from "react";

const OrangeCircleBg = ({ top, right }) => {
  const isDarkTheme = localStorage.getItem("isDarkTheme");

  return (
    <>
      {isDarkTheme === "true" ? (
        <div
          className={`bg-[#f34e75] blur-[85px] rounded-full w-[100px] h-[100px]`}
        ></div>
      ) : (
        <div
          className={`bg-[#ff3a68] blur-[80px] rounded-full w-[150px] h-[150px]`}
        ></div>
      )}
    </>
  );
};

export default OrangeCircleBg;
