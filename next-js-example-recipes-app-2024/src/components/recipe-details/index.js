import Link from "next/link";

const RecipeDetailsItem = ({ getRecipeDetails }) => {
  return (
    <div>
      <Link href={"/recipe-list"} className="p-6">
        Go to recipe list
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl max-auto ">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails.name}
            </h2>
            <div className="mt-5 flex gap-4 flex-wrap">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt0-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetailsItem;
