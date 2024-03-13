import CryptoScreen1 from "@/screens/cryptoscreen1";
import CryptoScreen2 from "@/screens/cryptoscreen2";
import TradingView from "@/screens/cryptoscreen3";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-4">
      {" "}
      <CryptoScreen2 /> <CryptoScreen1 />{" "}
      <div className="flex">
        <CryptoScreen2 />
        <div className="w-[600px] h-[440px] bg-black items-center justify-center">
          <div className="mt-4">
            <TradingView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
