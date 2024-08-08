const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

export default async function fetchDrinks() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  //Throw an error

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
}
