import Link from "next/link";

function DrinkList({ drinks }) {
  return (
    <div>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default DrinkList;
