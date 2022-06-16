import { BenaglImgage } from "../css/Bengal.styled";

const BengalPic = ({ bengImg, bengText }) => {
  return (
    <div>
      <BenaglImgage src={bengImg} alt={bengText} />
    </div>
  );
};

export default BengalPic;
