import React from "react";
import NotFound from "./not-found";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) return NotFound();
  return (
    <>
      <div>Product{productId}</div>
      <div> ProductReview{reviewId}</div>
    </>
  );
};

export default ProductReview;
