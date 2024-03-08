import React from "react";
import PurpleCircleBg from "../Components/PurpleCircleBg";
import BlueCircleBg from "../Components/BlueCircleBg";
import OrangeCircleBg from "../Components/OrangeCircleBg";

const Home = () => {
  return (
    <>
      <div className="absolute top-[20%] right-[20px]">
        <PurpleCircleBg />
      </div>
      <div className="absolute top-[10px] left-[20px]">
        <BlueCircleBg />
      </div>
      <div className="absolute top-[60%] left-[50%]">
        <OrangeCircleBg />
      </div>
      <main className="w-full flex justify-center items-center">
        <section className="w-full min-h-screen flex screen-620:flex-row flex-col-reverse items-center justify-center glassy screen-620:p-10 p-3">
          <div>
            <div className="screen-620:w-[50%] w-full flex items-center">
              <h1
                data-text="GET RESUME..."
                className="main-text screen-620:text-[5.5vw]  text-[10vw] "
              >
                GET RESUME...
              </h1>
            </div>

            <p className="ms-3 theme-text border border-primary w-fit px-3 py-1 rounded-full shadow-custom">
              The Best <span className="text-primary">#1</span> Free Resume
              Builder
            </p>
          </div>
          <div className="screen-620:w-[50%] w-full"></div>
        </section>
      </main>
    </>
  );
};

export default Home;
