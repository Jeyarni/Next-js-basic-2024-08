"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ClientSideDataFetching = () => {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  // const fetchListOfUsers = async () => {
  //   try {
  //     setLoading(true);
  //     const apiResponse = await fetch("https://dummyjson.com/users");
  //     const result = await apiResponse.json();

  //     if (result?.users) {
  //       setUsers(result.users);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setUsers([]);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchListOfUsers();
  // }, []);

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) {
    return <h1>failed to load</h1>;
  }

  if (isLoading)
    return (
      <h3 className="font-extrabold text-3xl">Loading Users! please wait</h3>
    );
  return (
    <>
      <div className="p-10">
        <h1 className="font-size-15">ClientSideDataFetching-User List</h1>
        {/* <ul>
          {users && users?.length > 0
            ? users.map((user) => (
                <li className="mt-5 cursor-pointer" key={user.id}>
                  <Link href={`/client-data-fetch/${user.id}`}>
                    {user.firstName}
                  </Link>
                </li>
              ))
            : null}
        </ul> */}
        <ul>
          {data?.users && data?.users?.length > 0
            ? data?.users.map((user) => (
                <li className="mt-5 cursor-pointer" key={user.id}>
                  <Link href={`/client-data-fetch/${user.id}`}>
                    {user.firstName}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default ClientSideDataFetching;
