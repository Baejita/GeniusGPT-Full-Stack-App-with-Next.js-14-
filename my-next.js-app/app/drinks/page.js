import DrinkList from "@/components/DrinkList";
import fetchDrinks from "../lib/apiFetchDrink";

const DrinksPage = async () => {
  const data = await fetchDrinks();
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>

      <DrinkList drinks={data.drinks} />
      {/* <div>
        {data.map((image, index) => (
          <div key={index}>
            <Image
              src={image.strDrinkThumb}
              alt="imageformat"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default DrinksPage;
