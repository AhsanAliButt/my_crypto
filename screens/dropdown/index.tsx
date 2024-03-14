import React from "react";
import Image from "next/image";

type DataType = {
  logo: string;
  coin: string;
  sign: string;
  amount: string;
  token: string;
};

const data: DataType[] = [
  {
    logo: "/iconETH.png",
    coin: "DegenWallet1",
    sign: "/tick.png",
    amount: "0.032",
    token: "ETH",
  },
  {
    logo: "/iconETH.png",
    coin: "DegenWallet1",
    sign: "/tick.png",
    amount: "0.032",
    token: "ETH",
  },
  {
    logo: "/iconETH.png",
    coin: "DegenWallet1",
    sign: "/tick.png",
    amount: "0.032",
    token: "ETH",
  },
];

const Dropdown = () => {
  return (
    <div className="w-[250px] h-[150px] bg-black flex items-center justify-center ml-10 ">
      <div className="w-[225px] h-[125px] border border-stone-500 border-opacity-70 rounded-md p-2 ">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="rounded-8xs flex flex-row items-center justify-center pt-[3.8000000000000114px] pb-1 pr-0.5 pl-[5px] gap-[5px]">
              <Image
                width={11}
                height={18}
                className="relative object-cover min-h-[18px] z-[1]"
                alt=""
                src={item.logo}
              />
              <div className="flex flex-col items-start justify-start pt-[1.1999999999999886px] px-0 pb-0">
                <div className="relative z-[1] text-white text-xs">
                  {item.coin}
                </div>
              </div>
              <Image
                height={18}
                width={18}
                className="relative min-h-[18px] z-[1]"
                alt=""
                src={item.sign}
              />
            </div>
            <div className="text-white text-xs">
              {item.amount}{" "}
              <span className="text-[#C4C4C4] ml-1 opacity-50">
                {item.token}
              </span>
            </div>
          </div>
        ))}
        <div className="flex border-0 border-t border-t-slate-400 border-opacity-50 p-1 text-[#C4C4C4] text-xs">
          <Image
            height={15}
            width={15}
            className="relative min-h-[18px] z-[1] mr-1"
            alt=""
            src={"/manage.svg"}
          />
          Manage wallets...
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
