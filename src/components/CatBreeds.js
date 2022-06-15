import { useEffect, useState } from "react";
//
import { CatBreedsStyle } from "../css/Breeds.styled";
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
      <CatBreedsStyle>
        {cats.map((cat) => (
          <div key={cat.id}>
            <p>{cat.name}</p>
          </div>
        ))}
      </CatBreedsStyle>
    </div>
  );
};

export default CatBreeds;
