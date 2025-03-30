"use client";
import { useState } from "react";
const Summary = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      The global crypto market cap is{" "}
      <span className="font-medium">$2.7T,</span> a
      <span className="text-red-500 font-medium">&#x25BC; 2.39% </span> a
      decrease over the last day.{" "}
      {!readMore && (
        <>
          <span>
            <button
              type="button"
              className="ms-0.5 underline"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              Read More
            </button>
          </span>
        </>
      )}
      {readMore && (
        <div>
          <p>
            The total crypto market volume over the last 24 hours is $74.63B,
            which makes a{" "}
            <span className="text-red-500 font-medium">&#x25BC; 15.62% </span>{" "}
            decrease. The total volume in DeFi is currently
            <span className="font-medium"> $5.17B, 6.92%</span> of the total
            crypto market 24-hour volume. The volume of all stable coins is now{" "}
            <span className="font-medium">$72.93B</span>, which is{" "}
            <span className="font-medium">97.72%</span> of the total crypto
            market 24-hour volume. <br /> Bitcoin’s dominance is currently{" "}
            <span className="font-medium">61.27%</span>, an increase of{" "}
            <span className="text-green-500 font-medium">&#x25BC; 0.18% </span>{" "}
            over the day.br
          </p>
          <button
            type="button"
            className="underline"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            Read Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Summary;
