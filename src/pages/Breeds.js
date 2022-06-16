import CatBreeds from "../components/CatBreeds";
import { Content, Description } from "../css/App.styled";

const Breeds = () => {
  return (
    <Content>
      <Description>
        <p>Breeds</p>
      </Description>
      <CatBreeds />
    </Content>
  );
};

export default Breeds;
