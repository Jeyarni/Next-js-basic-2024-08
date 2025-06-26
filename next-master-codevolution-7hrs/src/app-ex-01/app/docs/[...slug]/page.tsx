import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  if (slug?.length === 2)
    return (
      <h1>
        {slug[0]} && {slug[1]}
      </h1>
    );
  else if (slug?.length === 1) return <h1>{slug[0]}</h1>;
  return (
    <>
      <h1>docs</h1>
    </>
  );
};

export default Docs;
