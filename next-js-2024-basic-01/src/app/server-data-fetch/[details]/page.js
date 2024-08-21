const fetchUserDetails = async (currentUserId) => {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/users/${currentUserId}`
    );
    const result = await apiResponse.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const UserDetails = async ({ params }) => {
  console.log(params);
  const userDetails = await fetchUserDetails(params.details);
  return (
    <div>
      UserDetails
      <p>
        {userDetails?.firstName}
        {userDetails?.lastName}
      </p>
      <p>{userDetails?.age}</p>
      <p>{userDetails?.email}</p>
      <p>{userDetails?.phone}</p>
      <p>{userDetails?.birthDate}</p>
    </div>
  );
};

export default UserDetails;
