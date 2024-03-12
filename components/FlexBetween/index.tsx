import React from "react";

const FlexBetween = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export default FlexBetween;
