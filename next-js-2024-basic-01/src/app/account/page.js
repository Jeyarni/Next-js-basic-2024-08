import { redirect } from "next/navigation";

const Accounts = () => {
  const userprofileInfo = null;
  // if (userprofileInfo === null) redirect("profile");
  if (userprofileInfo === null)
    // redirect("cart?search=product1&randomvalue=1233456");
    redirect("products?search=product1&randomvalue=1233456");
  return <div>Accounts</div>;
};

export default Accounts;
