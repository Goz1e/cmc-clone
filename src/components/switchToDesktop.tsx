"use client";
import { RxDesktop, RxMobile, RxSwitch } from "react-icons/rx";
import { PiDeviceRotate } from "react-icons/pi";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

const SwitchToDesktop = () => {
  const _elements = [
    <RxDesktop key={1} color="#ffffff" />,
    <RxMobile key={2} color="#ffffff" />,
    <RxSwitch key={3} color="#ffffff" />,
    <PiDeviceRotate key={4} color="#ffffff" />,
  ];
  const [order, setOrder] = useState(initialOrder);
  const [elements] = useState(_elements);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className="size-full flex flex-col gap-3 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="grid grid-cols-2 gap-2">
          {order.map((backgroundColor, index) => (
            <motion.li
              key={backgroundColor}
              layout
              transition={spring}
              style={{ backgroundColor }}
              className="h-10 aspect-square rounded-md flex items-center justify-center"
            >
              {elements[index]}
            </motion.li>
          ))}
        </div>
      </motion.div>
      <div className="flex gap-2 text-sm text-wrap items-center">
        <p className="">Switch To Desktop for Best Experience</p>
        <RxDesktop key={1} />
      </div>
    </div>
  );
};

export default SwitchToDesktop;

const initialOrder = ["#bfbfbf", "#7f7f7f", "#404040", "#000000"];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
