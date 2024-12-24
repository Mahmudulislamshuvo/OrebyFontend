import React, { useEffect, useState } from "react";
import ExperienceImg from "../../../assets/ExperiencePosterImg/Poster.png";

const ExperiencePoster = () => {
  const [time, settime] = useState(3 * 24 * 60 * 60 * 1000 || 0); // Initial countdown time

  useEffect(() => {
    // Create the worker
    const worker = new Worker(
      new URL("../../../Worker/Countdown2Worker.js", import.meta.url),
    );
    // My time send to Countdown
    worker.postMessage(time);
    // Message nilam Countdown theke
    worker.onmessage = (e) => {
      settime(e.data); // Update the countdown time
    };

    // Cleanup: terminate the worker on component unmount
    return () => worker.terminate();
  }, []);
  // Function to format the countdown
  const formateDate = (miliSecond) => {
    let total_Second = parseInt(Math.floor(miliSecond / 1000));
    let total_minute = parseInt(Math.floor(total_Second / 60));
    let total_hour = parseInt(Math.floor(total_minute / 60));
    let days = parseInt(Math.floor(total_hour / 24));
    let Seconds = parseInt(Math.floor(total_Second % 60));
    let Minutes = parseInt(Math.floor(total_minute % 60));
    let Hours = parseInt(Math.floor(total_hour % 24));
    return { days, Seconds, Minutes, Hours };
  };

  const { days, Seconds, Minutes, Hours } = formateDate(time);
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-center bg-text2_black_full px-[60px] py-[15px]">
          <div className="w-[45%]">
            <h5 className="pb-[32px] font-poppins text-base font-semibold text-green_00FF66">
              Categories
            </h5>
            <h3 className="pb-[32px] pr-[100px] font-poppins text-5xl font-semibold text-whiteColor">
              Enhance Your Music Experience
            </h3>
            <div className="flex gap-x-6">
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-green-400 p-2 text-center">
                <h6 className="font-poppins text-base font-semibold text-text2_black_full">
                  {days}
                </h6>
                <h5 className="font-poppins text-[11px] text-text2_black_full">
                  Days
                </h5>
              </div>
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-green-400 p-2 text-center">
                <h6 className="font-poppins text-base font-semibold text-text2_black_full">
                  {Hours}
                </h6>
                <h5 className="font-poppins text-[11px] text-text2_black_full">
                  Hours
                </h5>
              </div>
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-green-400 p-2 text-center">
                <h6 className="font-poppins text-base font-semibold text-text2_black_full">
                  {Minutes}
                </h6>
                <h5 className="font-poppins text-[11px] text-text2_black_full">
                  Minutes
                </h5>
              </div>
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-green-400 p-2 text-center">
                <h6 className="font-poppins text-base font-semibold text-text2_black_full">
                  {Seconds}
                </h6>
                <h5 className="font-poppins text-[11px] text-text2_black_full">
                  Seconds
                </h5>
              </div>
            </div>
            <button className="mt-10 rounded bg-green_00FF66 px-12 py-4 font-poppins text-whiteColor focus:outline-none">
              Buy Now!
            </button>
          </div>
          <div className="w-[55%]">
            <div className="PosterBackground">
              <img
                src={ExperienceImg}
                alt="Experience Image"
                className="poster-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePoster;
