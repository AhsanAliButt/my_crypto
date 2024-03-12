import React from "react";
import Image from "next/image";

const CryptoScreen2 = () => {
  //   type CoinDetailType = {
  //     logo: string;
  //     name: string;
  //     change: string;
  //     volume: string;
  //   };
  //   const coinData: CoinDetailType[] = [
  //     {
  //       logo: "/IconETH.png",
  //       name: "Ethereum",
  //       change: "+0.05",
  //       volume: "2.25M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Bitcoin",
  //       change: "-0.02",
  //       volume: "2.3M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Ethereum",
  //       change: "+0.05",
  //       volume: "2.25M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Bitcoin",
  //       change: "-0.02",
  //       volume: "2.3M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Ethereum",
  //       change: "+0.05",
  //       volume: "2.25M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Bitcoin",
  //       change: "-0.02",
  //       volume: "2.3M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Ethereum",
  //       change: "+0.05",
  //       volume: "2.25M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Bitcoin",
  //       change: "-0.02",
  //       volume: "2.3M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Ethereum",
  //       change: "+0.05",
  //       volume: "2.25M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Bitcoin",
  //       change: "-0.02",
  //       volume: "2.3M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Ethereum",
  //       change: "+0.05",
  //       volume: "2.25M",
  //     },
  //     {
  //       logo: "/IconETH.png",
  //       name: "Bitcoin",
  //       change: "-0.02",
  //       volume: "2.3M",
  //     },
  //     // {
  //     //   logo: "/IconETH.png",
  //     //   name: "Ethereum",
  //     //   change: "+0.05",
  //     //   volume: "2.25M",
  //     // },
  //     // {
  //     //   logo: "/IconETH.png",
  //     //   name: "Bitcoin",
  //     //   change: "-0.02",
  //     //   volume: "2.3M",
  //     // },
  //   ];

  return (
    <div className="relative w-[504px] h-[440px] bg-black overflow-hidden flex flex-col items-start justify-start pt-[11px] px-[29px] pb-[46px] box-border gap-[11px_0px] tracking-[normal]">
      <div className="w-[425px] h-[68px]">
        <header className="self-stretch flex flex-row items-end justify-between pt-0 px-0 pb-[2.1999999999999886px] gap-[20px] text-left text-[12px] text-white font-geist">
          <Image
            width={25}
            height={33}
            className="relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/thunder2dlogovector.svg"
          />

          <div className="flex flex-row justify-start gap-[0px_13px] items-center">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <Image
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/settings.png"
                width={15}
                height={17}
              />
            </div>
            <div className="rounded-8xs flex flex-row items-center justify-center pt-[3.8000000000000114px] pb-1 pr-0.5 pl-[5px] gap-[5px] border-[1px] border-solid border-darkslategray-200">
              <Image
                width={11}
                height={18}
                className="relative object-cover min-h-[18px] z-[1]"
                alt=""
                src="/iconETH.png"
              />
              <div className="flex flex-col items-start justify-start pt-[1.1999999999999886px] px-0 pb-0">
                <div className="relative z-[1]">
                  Multiple
                  <span className="text-[#ED8204]">(3)</span>
                </div>
              </div>
              <Image
                height={18}
                width={18}
                className="relative min-h-[18px] z-[1]"
                alt=""
                src="/dropdown.png"
              />
            </div>
          </div>
        </header>
        <footer className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[8px] gap-[20px] text-left text-[16px] text-gray mt-2">
          <nav className="m-0 w-[212px] flex flex-row items-start justify-start gap-[0px_18px] text-left text-[18px] text-gray font-geist">
            <div className="flex-1 relative font-semibold">Market</div>
            <div className="relative font-semibold text-white">Limit</div>
            <div className="flex-1 relative font-semibold">Convert</div>
          </nav>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative font-semibold">Positions</div>
          </div>
        </footer>
      </div>
      <div className="box-border flex flex-row items-start justify-start py-2 px-[15px] gap-[10px] max-w-full border-[1px] border-solid border-darkslategray-200">
        <div className="h-10 w-[425px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-200" />
        <Image
          height={24}
          width={24}
          className="relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/searchIcon.png"
        />
        <input
          className="w-[325px] [border:none] [outline:none] bg-[transparent] h-[20px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-[12px] text-silver"
          placeholder="kdsak3287hd2odynh2odo8y2"
          type="text"
        />
        <Image
          height={24}
          width={24}
          className="relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/cross.png"
        />
      </div>
      <section className="w-[425px] flex flex-row items-start justify-center max-w-full text-left text-[14px] text-white space-x-2">
        <div className="flex items-center justify-between w-[400px] border-b-[1px] border-green-50 border-opacity-90 pb-4">
          <div className="flex">
            <img
              className="relative overflow-hidden shrink-0 mr-1"
              loading="lazy"
              alt=""
              src={"/IconETH.png"}
            />
            Ethereum Reserve (VEC)
          </div>
          <div className="flex">
            <div className="flex justify-around">
              <img
                className="relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={"/etherScan.svg"}
              />
              EtherScan
            </div>
            <div className="flex ml-3">
              <img
                className="relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={"/guard.svg"}
              />
              Guard
            </div>
          </div>
        </div>
      </section>
      <section className="w-[425px] flex flex-row items-start justify-center max-w-full text-left text-[14px] text-white space-x-2">
        <div className="flex items-center justify-between w-[400px]">
          <div>
            <span className=" text-opacity-80 text-silver text-xs">Price</span>
            <div className="text-[16px] -mt-2">$27.55</div>
          </div>
          <div>
            <span className=" text-opacity-80 text-silver text-xs">
              24H Volume
            </span>
            <div className="text-[16px] -mt-2">
              $1.6M
              <span className=" text-green-900 text-xs -mt-2 ml-1">32%</span>
            </div>
          </div>
          <div>
            <span className=" text-opacity-80 text-silver text-xs">
              MarketCap
            </span>
            <div className="text-[16px] -mt-2">$286.10M</div>
          </div>
          <div>
            <span className=" text-opacity-80 text-silver text-xs">
              Liquidity
            </span>
            <div className="text-[16px] -mt-2">900.4 WETH</div>
          </div>
        </div>
      </section>

      <section className="w-[425px] flex flex-row items-start justify-center max-w-full text-left text-[14px] text-white space-x-2">
        <div className="flex items-center justify-between w-[400px]">
          <div>
            <span className=" text-opacity-80 text-silver text-xs">
              You Pay
            </span>
            <div className="text-[16px] -mt-[6px]">
              $0.08<span className="text-silver opacity-50 ml-1">ETH</span>{" "}
            </div>
            <div className=" text-opacity-80 text-silver text-xs -mt-[6px]">
              $199.59
            </div>
          </div>

          <div>
            <img
              className="relative overflow-hidden shrink-0 mr-1"
              loading="lazy"
              alt=""
              src={"/exchangeicon.svg"}
            />
          </div>
          <div>
            <span className=" text-opacity-80 text-silver text-xs">
              You Receive
            </span>
            <div className="text-[16px] -mt-[6px]">
              7.3434 <span className="text-silver opacity-50">VEC</span>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="w-[425px] flex flex-row items-start justify-center max-w-full text-left text-[14px] text-white space-x-2">
        <div className="flex items-center justify-between w-[400px]">
          <img
            className="relative overflow-hidden shrink-0 mr-1"
            loading="lazy"
            alt=""
            src={"/group.png"}
          />
          26%
        </div>
      </section>

      <section className="w-[425px] flex flex-row items-start justify-center max-w-full text-left text-[14px] text-white space-x-2">
        <button className="w-full h-[34px] bg-[#27F79E] border-2 border-opacity-50 text-center border-solid border-cyan-700 text-green-950 font-bold">
          {" "}
          Market Buy
        </button>
      </section>
      <section className="w-[425px] flex flex-row items-start justify-center max-w-full text-left text-[14px] text-white space-x-2">
        <div className="flex items-center justify-end w-[400px] pb-4">
          <img
            className="relative overflow-hidden shrink-0 mr-1"
            loading="lazy"
            alt=""
            src={"/GAS.png"}
          />
          <span className=" text-opacity-80 text-silver text-xs text-center align-middle mt-1">
            GAS:11.62$
          </span>
        </div>
      </section>
      {/* Sidebar */}
      <div className="h-[280px] w-5 bg-[#3B3B3B] absolute top-[90px] right-0 flex mr-4">
        <img
          className="relative overflow-hidden shrink-0 mr-1"
          loading="lazy"
          alt=""
          src={"/sidebaricon.svg"}
        />
      </div>
    </div>
  );
};

export default CryptoScreen2;
