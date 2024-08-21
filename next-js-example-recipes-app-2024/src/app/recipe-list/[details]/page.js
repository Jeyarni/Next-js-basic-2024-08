import RecipeDetailsItem from "../../../components/recipe-details";

const fetchRecipeDetails = async (currentRecipeId) => {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    ).then((res) => res.json());
    return apiResponse;
  } catch (e) {
    throw new Error(e);
  }
};

const RecipeDetails = async ({ params }) => {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  console.log(getRecipeDetails);

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
};
export default RecipeDetails;
