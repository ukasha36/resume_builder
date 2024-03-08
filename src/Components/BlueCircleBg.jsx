import React from "react";

const BlueCircleBg = ({ top, right }) => {
  const isDarkTheme = localStorage.getItem("isDarkTheme");

  return (
    <>
      {isDarkTheme === "true" ? (
        <div
          className={`bg-[#0018ed] blur-[100px] rounded-full w-[150px] h-[150px]`}
        ></div>
      ) : (
        <div
          className={`bg-[#0018ed85] blur-[70px] rounded-full w-[150px] h-[150px]`}
        ></div>
      )}
    </>
  );
};

export default BlueCircleBg;
