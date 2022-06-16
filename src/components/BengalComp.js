import { useEffect, useState } from "react";
//
import { BengalText, BengalFlex, EachBengal } from "../css/Bengal.styled";

//
import aryeh1 from "../images/Aryeh1.JPG";
import aryeh2 from "../images/Aryeh2.JPG";
import aryeh3 from "../images/Aryeh3.JPG";
import aryeh4 from "../images/Aryeh4.JPG";
import mira1 from "../images/Mira1.JPG";
import mira2 from "../images/Mira2.JPG";
import mira3 from "../images/Mira3.JPG";
import mira4 from "../images/Mira4.JPG";
import nuka1 from "../images/Nuka1.JPG";
import nuka2 from "../images/Nuka2.JPG";
import nuka3 from "../images/Nuka3.JPG";
import nuka4 from "../images/Nuka4.JPG";
//
import { faker } from "@faker-js/faker";
import BuyBengals from "./BuyBengals";
//
const BengalComp = () => {
  // useState animal
  const [cats, setCats] = useState([]);
  // error handling useState
  const [error, setError] = useState(null);

  // use effect function from react
  // fetch function goes inside so only handle fetch request once
  useEffect(() => {
    const fetchData = async () => {
      // error
      try {
        //
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds/search?q=bengal&api_key=c9d88068-26d3-4c95-9506-7b644e299d54"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        //
        const data = await response.json();
        setCats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch the data");
      }
    };

    fetchData();
  }, []);
  //

  return (
    <div className="App">
      {/* error */}
      {error && <p>{error}</p>}
      {/* Map Array */}
      <div>
        {cats.map((cat) => (
          <div key={cat.id}>
            <BengalText>
              <h1>{cat.name}</h1>
              <p>{cat.temperament}</p>
              <p>{cat.description}</p>
            </BengalText>
          </div>
        ))}
      </div>
      <BuyBengals />
    </div>
  );
};

export default BengalComp;
