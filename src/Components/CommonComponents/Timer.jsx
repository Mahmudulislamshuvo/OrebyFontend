import React, { useEffect, useState } from "react";

const Timer = ({ timeofOffer = 0 }) => {
  const [time, settime] = useState(timeofOffer * 24 * 60 * 60 * 1000 || 0); // Initial countdown time

  useEffect(() => {
    // Create the worker
    const worker = new Worker(
      new URL("../../CountDownWorker.js", import.meta.url),
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
    <div className="flex gap-x-8">
      <div className="flex items-start">
        <div>
          <span className="text-[12px] font-medium text-text2_black_full">
            Days
          </span>
          <h5 className="text-[32px] font-bold text-text2_black_full">
            {days < 10 ? `0${days}` : days}
          </h5>
        </div>
        <div className="flex">
          <span className="self-end pl-4 text-[40px] font-medium text-red_DB4444 opacity-80">
            :
          </span>
        </div>
      </div>
      <div className="flex items-start">
        <div>
          <span className="text-[12px] font-medium text-text2_black_full">
            Hours
          </span>
          <h5 className="text-[32px] font-bold text-text2_black_full">
            {Hours < 10 ? `0${Hours}` : Hours}
          </h5>
        </div>
        <div className="flex">
          <span className="self-end pl-4 text-[40px] font-medium text-red_DB4444 opacity-80">
            :
          </span>
        </div>
      </div>
      <div className="flex items-start">
        <div>
          <span className="text-[12px] font-medium text-text2_black_full">
            Minutes
          </span>
          <h5 className="text-[32px] font-bold text-text2_black_full">
            {Minutes < 10 ? `0${Minutes}` : Minutes}
          </h5>
        </div>
        <div className="flex">
          <span className="self-end pl-4 text-[40px] font-medium text-red_DB4444 opacity-80">
            :
          </span>
        </div>
      </div>
      <div className="flex items-start">
        <div>
          <span className="text-[12px] font-medium text-text2_black_full">
            Seconds
          </span>
          <h5 className="text-[32px] font-bold text-text2_black_full">
            {Seconds < 10 ? `0${Seconds}` : Seconds}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Timer;
