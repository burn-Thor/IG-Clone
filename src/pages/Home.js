import { useEffect, useState } from "react";
import CatsInfo from "../components/CatsInfo";
import { Content, Description } from "../css/App.styled";


const Home = () => {
  const [catsInformation, setCatsinformation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=20&api_key=c9d88068-26d3-4c95-9506-7b644e299d54"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setCatsinformation(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {error && <p>{error}</p>}
<<<<<<< HEAD
      <Content>
        {catsInformation.map((cats) => (
          <items className="items" key={cats.id}>
            <h3>{cats.name}</h3>
            <h3>{cats.origin}</h3>
            <img src={cats.url} alt="cats" />
          </items>
        ))}
        <CatInfo />
        <Description>
          <p>Home</p>
        </Description>
      </Content>
=======
    <Content>
      {catsInformation.map((cats) => (
        <items className="items" key={cats.id}>
          <h3>{cats.name}</h3>
          <h3>{cats.origin}</h3>
          <img src={cats.url} alt="cats" />
        </items>
      ))}
      <Description>
        <p>Home</p>
      </Description>
      <CatsInfo/>
    </Content>
>>>>>>> 708b0b1a8c7c44392884e0efbe9a6a431d103287
    </div>
  );
};

export default Home;
