import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div>This page does not exist</div>
      <Link href={"/"}>Go back to home</Link>
    </>
  );
};

export default NotFound;
