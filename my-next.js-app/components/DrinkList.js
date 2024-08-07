import Image from "next/image";
import Link from "next/link";

function DrinkList({ drinks }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DrinkList;

//version 1
// import Link from "next/link";

// function DrinkList({ drinks }) {
//   return (
//     <div>
//       {drinks.map((drink) => (
//         <li key={drink.idDrink}>
//           <Link
//             href={`/drinks/${drink.idDrink}`}
//             className="text-xl font-medium"
//           >
//             {drink.strDrink}
//           </Link>
//         </li>
//       ))}
//     </div>
//   );
// }

// export default DrinkList;
