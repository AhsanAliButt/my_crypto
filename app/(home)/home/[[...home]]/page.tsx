import CryptoScreen1 from "@/screens/cryptoscreen1";
import CryptoScreen2 from "@/screens/cryptoscreen2";
import React from "react";

const Page = () => {
  return (
    <div className="flex space-x-10">
      {" "}
      <CryptoScreen2 /> <CryptoScreen1 />{" "}
    </div>
  );
};

export default Page;
