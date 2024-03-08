import React from "react";

const PurpleCircleBg = ({ top, right }) => {
  const isDarkTheme = localStorage.getItem("isDarkTheme");

  return (
    <>
      {isDarkTheme === "true" ? (
        <div
          className={`bg-[#dc4ef3] blur-[100px] rounded-full w-[150px] h-[150px]`}
        ></div>
      ) : (
        <div
          className={`bg-[#e55dfa] blur-[70px] rounded-full w-[150px] h-[150px]`}
        ></div>
      )}
    </>
  );
};

export default PurpleCircleBg;
