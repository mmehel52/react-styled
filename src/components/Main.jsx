import React from "react";
import data from "../data.js";
import StyledMain, { Cont, Desc, Img } from "./styles/Main.styled.jsx";

const Main = () => {
  return (
    <StyledMain>
      <div>
        {data.map((item) => {
          const { id, title, body, image } = item;
          return (
            <Cont key={id} id={id}>
              <div>
                <h2>{title}</h2>
                <Desc>{body}</Desc>
              </div>

              <Img src={"./images/" + image} alt={id} />
            </Cont>
          );
        })}
      </div>
    </StyledMain>
  );
};

export default Main;
