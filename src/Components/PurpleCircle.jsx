import React from "react";

const PurpleCircle = () => {
  const isDarkTheme = localStorage.getItem("isDarkTheme");

  return (
    <>
      {isDarkTheme === "true" ? (
        <div className="absolute blur-sm bottom-[-150px] right-[-150px] rounded-full w-[250px] h-[250px] bg-gradient-to-r from-[#E12CDA99] to-[#E712121A] shadow-form"></div>
      ) : (
        <div className="absolute blur-md bottom-[-150px] right-[-150px] rounded-full w-[250px] h-[250px] bg-gradient-to-r from-[#85145f] to-[#E12CDA99]  shadow-form"></div>
      )}
    </>
  );
};

export default PurpleCircle;
