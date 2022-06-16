import CatBreeds from "../components/CatBreeds";
import CatPersonArray from "../components/CatPersonalityArray";
import { Content, Description } from "../css/App.styled";

const Breeds = () => {
  return (
    <Content>
      <Description>
        <p>Breeds</p>
      </Description>
      {/* cat breeds component */}
      <CatBreeds />
      <CatPersonArray />
    </Content>
  );
};

export default Breeds;
