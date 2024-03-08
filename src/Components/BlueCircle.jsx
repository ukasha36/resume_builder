import React from "react";

const BlueCircle = () => {
  const isDarkTheme = localStorage.getItem("isDarkTheme");

  return (
    <>
      {isDarkTheme === "true" ? (
        <div className="absolute blur-sm top-[-200px] left-[-150px] rounded-full w-[300px] h-[300px] bg-gradient-to-r from-[#2CD1D199] to-[#6425EC1A] shadow-custom"></div>
      ) : (
        <div className="absolute blur-md top-[-200px] left-[-150px] rounded-full w-[300px] h-[300px] bg-gradient-to-r from-[#2CD1D199] to-[#450b86] shadow-custom"></div>
      )}
    </>
  );
};

export default BlueCircle;
