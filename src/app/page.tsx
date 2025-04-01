"use client";
import Navbar from "@/components/navbar/navbar";
import Nav2 from "@/components/navbar/nav2";
import InfoNav from "@/components/navbar/infonav";
import Nav4 from "@/components/navbar/nav4";
import Summary from "@/components/summary";
import Container from "@/components/cards/container";
import Container2 from "@/components/cards/container2";
import MarketCapCard from "@/components/cards/marketCapCard";
import CommunityCard from "@/components/cards/communityCard";
import NewsCard from "@/components/cards/newsCard";
import AltCard from "@/components/cards/altCard";
// import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className=" size-full space-y-4">
      {/* Navbar */}
      <div className="w-full *:w-full gap-0.5 grid *:bg-gray NAVBAR">
        <div className="flex justify-between pb-3.5">
          <Navbar />
          <Nav2 />
        </div>
        <div className="inline-flex justify-between border-y py-2">
          <InfoNav />
          <Nav4 />
        </div>
      </div>
      {/* Hero Section */}
      <div className="space-y-2 py-2">
        <p className="text-2xl font-bold">
          {"Today's Cryptocurrency Prices by Market Cap"}
        </p>
        <Summary />
      </div>
      {/* Card Section */}
      <div className="  dark:bg-transparent mt-3 h-80 flex gap-4 ">
        <div className="basis-1/2 flex gap-4 *:shadow-lg shadow-[#fcfcfc]">
          <div className="basis-1/2 bg-card rounded-xl p-4">
            <Container />
          </div>
          <div className="basis-1/2 bg-card rounded-xl p-4">
            <Container2 />
          </div>
        </div>
        <div className="basis-1/2  flex gap-4">
          <div className="basis-1/2 *:bg-card *:shadow-lg shadow-[#fcfcfc] *:rounded-xl grid grid-cols-2 gap-4">
            <div className=" rounded-xl p-4">
              <MarketCapCard
                title={"Market Cap"}
                volume={"$2.8T"}
                change={"0.76%"}
                img={"/chart/mcap.png"}
              />
            </div>
            <div className=" rounded-xl p-4">
              <MarketCapCard
                title={"CMC 100"}
                volume={"$162.77"}
                change={"0.49%"}
                img={"/chart/cmc100.png"}
              />
            </div>
            <div className=" rounded-xl p-4">
              <MarketCapCard
                title={"CMC 100"}
                volume={"$162.77"}
                change={"0.49%"}
                img={"/chart/cmc100.png"}
              />
            </div>
            <div className=" rounded-xl p-4">
              <AltCard />
            </div>
          </div>
          <div className="basis-1/2  *:bg-card *:rounded-xl *:shadow-lg shadow-[#fcfcfc] flex flex-col gap-4">
            <div className="p-4 row-span-1 basis-1/2">
              <CommunityCard />
            </div>
            <div className="p-4 row-span-1 basis-1/2">
              {" "}
              <NewsCard />
            </div>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className=" bg-gray-300 space-y-2.5 p-12 h-screen sticky overflow-y-scroll">
        {" "}
        <div className=" bg-gray-400 h-screen  ">ff</div>
        <div className=" bg-gray-400 h-screen "></div>
      </div>
    </div>
  );
}
