import RecipeList from "../../components/recipe-list";

const fetchListOfRecipes = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes").then(
      (res) => res.json()
    );
    return apiResponse?.recipes;
  } catch (e) {
    throw new Error(e);
  }
};
const Recipe = async () => {
  const recipeList = await fetchListOfRecipes();
  return (
    <>
      <RecipeList recipeList={recipeList} />
    </>
  );
};
export default Recipe;
