import React from "react";
import { useState } from "react";
//
import { faker } from "@faker-js/faker";
//
import { BengalFlex, EachBengal, BenaglImgage } from "../css/Bengal.styled";
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

const BuyBengals = () => {
  const [cat] = useState([
    {
      img: aryeh1,
      description: "Aryeh Looking down at humans",
      cost: "£100000000",
    },
    { img: aryeh2, description: "Aryeh Lounging", cost: "£100000000" },
    { img: aryeh3, description: "Aryeh Sleeping", cost: "£100000000" },
    { img: aryeh4, description: "Aryeh Attacking a Tree", cost: "£100000000" },
    { img: mira1, description: "Samira Up High", cost: "£100000000" },
    { img: mira2, description: "Samira Posing", cost: "£100000000" },
    { img: mira3, description: "Samira Spotted a Fly", cost: "£100000000" },
    { img: mira4, description: "Samira Playing", cost: "£100000000" },
    { img: nuka1, description: "Nuka and Aryeh", cost: "£100000000" },
    { img: nuka2, description: "All three", cost: "£100000000" },
    { img: nuka3, description: "Samira and Nuka Kissing", cost: "£100000000" },
    { img: nuka4, description: "Samira and Nuka", cost: "£100000000" },
  ]);

  return (
    <div>
      <BengalFlex>
        {cat.map((cat) => (
          <EachBengal key={cat.id}>
            <div>
              <BenaglImgage src={cat.img} alt={cat.description} />
              <h4>{cat.description}</h4>
              <p>{cat.cost}</p>
              <button>Buy now</button>
            </div>
          </EachBengal>
        ))}
      </BengalFlex>
    </div>
  );
};

export default BuyBengals;
