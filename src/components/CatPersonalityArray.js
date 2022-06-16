import { useEffect, useState } from "react";
//
// import { CatBreedsStyle, EachBread, BreedText } from "../css/Breeds.styled";
//
const CatPersonArray = () => {
  // useState animal
  const [cats, setCats] = useState([]);
  // error handling useState
  //   const [error, setError] = useState(null);

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
        // setError("Could not fetch the data");
      }
    };

    fetchData();
  }, []);
  //

  const ourArray = cats.map((cat) => cat.id);
  console.log(ourArray);

  //   const ourArray2 = (maptemperament, id) => {
  //     const key = key;
  //     const temperament = temperament;
  //   };

  //   {cats.map((cat) => (
  //     <div key={cat.id}>
  //       <p>{cat.temperament}</p>
  //     </div>
  //   ))}
  //   each list should id and temperment

  return (
    <div className="App">
      {/* error */}
      {/* {error && <p>{error}</p>} */}
      {/* Map Array */}
      {/* <CatBreedsStyle>
        {cats.map((cat) => (
          <div key={cat.id}>
            <p>{cat.temperament}</p>
          </div>
        ))}
      </CatBreedsStyle>  */}
    </div>
  );
};

export default CatPersonArray;
