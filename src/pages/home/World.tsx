import React from "react";
import { WorldWrapper, WorldContainer, WorldButton } from "./style";

const World = () => {
  return (
    <WorldWrapper>
      <WorldContainer>
        <h1>
          Are you new to the<span> mining world?</span>
        </h1>
        <WorldButton>Learn with our glossary</WorldButton>
      </WorldContainer>
    </WorldWrapper>
  );
};

export default World;
