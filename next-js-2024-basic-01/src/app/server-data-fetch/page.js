import Link from "next/link";

const fetchListOfUsers = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
};

const ServerSideDataFetching = async () => {
  const listOfUsers = await fetchListOfUsers();
  console.log(listOfUsers);
  return (
    <div className="p-10">
      <h1 className="font-size-15">ServerSideDataFetching-User List</h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <li className="mt-5 cursor-pointer" key={user.id}>
                <Link href={`/server-data-fetch/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ServerSideDataFetching;
