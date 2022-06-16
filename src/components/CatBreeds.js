import { useEffect, useState } from "react";
//
import { CatBreedFlex, EachBread } from "../css/Breeds.styled";
//
const CatBreeds = () => {
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
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
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
      <CatBreedFlex>
        {cats.map((cat) => (
          <EachBread key={cat.id}>
            <b>{cat.name}</b>
            <p>{cat.temperament}</p>
          </EachBread>
        ))}
      </CatBreedFlex>
    </div>
  );
};

export default CatBreeds;
