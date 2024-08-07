import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Fail to fetch a drink...");
  }
  return res.json();
};
async function SingleDrinkPage({ params }) {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imageSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-md mb-4"
        priority
      />
      <h1 className="text-7xl">{title}</h1>
    </div>
  );
}

export default SingleDrinkPage;
