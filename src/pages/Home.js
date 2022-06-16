import { useEffect, useState } from "react";
import CatsInfo from "../components/CatsInfo";
import { TheApp, Content, Description } from "../css/App.styled";
import { CatImgage, CatFlex, EachCat } from "../css/Home.styled";

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
    <TheApp>
      {error && <p>{error}</p>}
      <Content>
        {" "}
        <Description>
          <p>Home</p>
        </Description>
        <CatFlex>
            {catsInformation.map((cats) => (
              <EachCat key={cats.id}>
                <CatImgage src={cats.url} alt="cats" />
                <h3>A Cat</h3>
              </EachCat>
            ))}
        </CatFlex>
        <CatsInfo />
      </Content>
    </TheApp>
  );
};

export default Home;
