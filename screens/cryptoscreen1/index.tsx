import React from "react";
import Image from "next/image";

const CryptoScreen1 = () => {
  type CoinDetailType = {
    logo: string;
    name: string;
    change: string;
    volume: string;
  };
  const coinData: CoinDetailType[] = [
    {
      logo: "/IconETH.png",
      name: "Ethereum",
      change: "+0.05",
      volume: "2.25M",
    },
    {
      logo: "/IconETH.png",
      name: "Bitcoin",
      change: "-0.02",
      volume: "2.3M",
    },
    {
      logo: "/IconETH.png",
      name: "Ethereum",
      change: "+0.05",
      volume: "2.25M",
    },
    {
      logo: "/IconETH.png",
      name: "Bitcoin",
      change: "-0.02",
      volume: "2.3M",
    },
    {
      logo: "/IconETH.png",
      name: "Ethereum",
      change: "+0.05",
      volume: "2.25M",
    },
    {
      logo: "/IconETH.png",
      name: "Bitcoin",
      change: "-0.02",
      volume: "2.3M",
    },
    {
      logo: "/IconETH.png",
      name: "Ethereum",
      change: "+0.05",
      volume: "2.25M",
    },
    {
      logo: "/IconETH.png",
      name: "Bitcoin",
      change: "-0.02",
      volume: "2.3M",
    },
    {
      logo: "/IconETH.png",
      name: "Ethereum",
      change: "+0.05",
      volume: "2.25M",
    },
    {
      logo: "/IconETH.png",
      name: "Bitcoin",
      change: "-0.02",
      volume: "2.3M",
    },
    {
      logo: "/IconETH.png",
      name: "Ethereum",
      change: "+0.05",
      volume: "2.25M",
    },
    {
      logo: "/IconETH.png",
      name: "Bitcoin",
      change: "-0.02",
      volume: "2.3M",
    },
    // {
    //   logo: "/IconETH.png",
    //   name: "Ethereum",
    //   change: "+0.05",
    //   volume: "2.25M",
    // },
    // {
    //   logo: "/IconETH.png",
    //   name: "Bitcoin",
    //   change: "-0.02",
    //   volume: "2.3M",
    // },
  ];

  return (
    <div className="w-[483px] h-[382px] bg-black overflow-hidden flex flex-col items-start justify-start pt-[11px] px-[29px] pb-[46px] box-border gap-[11px_0px] tracking-[normal]">
      <div className="w-full h-[68px]">
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
                <div className="relative z-[1]">DegenWallet1</div>
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
      <div className="self-stretch box-border flex flex-row items-start justify-start py-2 px-[15px] gap-[10px] max-w-full border-[1px] border-solid border-darkslategray-200">
        <div className="h-10 w-[425px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-200" />
        <Image
          height={24}
          width={24}
          className="relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/searchIcon.png"
        />
        <input
          className="w-[237px] [border:none] [outline:none] bg-[transparent] h-[19px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-geist text-[12px] text-silver"
          placeholder="Paste contract address or search a token..."
          type="text"
        />
      </div>
      <section className="w-[425px] min-h-[179px] self-stretch flex flex-row items-start justify-start max-w-full text-left text-[14px] text-white font-geist">
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch box-border flex flex-row items-start justify-start pt-[15px] px-4 pb-3 max-w-full border-[1px] border-solid border-darkslategray-100 overflow-y-auto">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[36px] max-w-full z-[1]">
              <div className="grid grid-cols-3 gap-1">
                {coinData.map((item, index) => (
                  <>
                    <div className="flex flex-col items-start justify-start w-32">
                      <div className="flex flex-row items-start justify-start gap-[0px_3.1px]">
                        <div className="flex flex-col items-start justify-start pt-[2px] px-0 pb-0">
                          <img
                            className="relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={item.logo}
                          />
                        </div>
                        <div className="relative">{item.name}</div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[14px] mt-[-2px] text-silver">
                        <div className="relative">
                          <span>{item.volume}</span>
                          <span className="text-mediumspringgreen">
                            {item.change}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-px px-[3px] z-[2] ml-[-409px] text-[10px] text-gray bg-black">
          <div className="h-3.5 w-[111px] relative bg-black hidden" />
          <div className="relative z-[1]">Trending by 1H Volume</div>
        </div>
      </section>
    </div>
  );
};

export default CryptoScreen1;
