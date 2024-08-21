"use client";
import { usePathname, useSearchParams } from "next/navigation";

const Cart = () => {
  const pathName = usePathname();
  console.log(pathName);
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"), searchParams.get("randomvalue"));
  return <div>Cart</div>;
};

export default Cart;
