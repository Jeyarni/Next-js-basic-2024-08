"use client";

import React from "react";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      Review {reviewId} page NotFound for {productId}
    </div>
  );
};

export default NotFound;
