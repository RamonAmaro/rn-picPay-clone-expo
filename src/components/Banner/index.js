import React from "react";

import { Container, Details, Title, Img, Descripton } from "./styles";

import img13 from "../../images/13.png";

export const Banner = () => {
  return (
    <Container>
      <Details>
        <Title> Cobre um Amigo </Title>
        <Descripton>
          Mantenha suas parcerias em dia, use o picpay para fazer suas cobranças
        </Descripton>
      </Details>
      <Img source={img13} />
    </Container>
  );
};
