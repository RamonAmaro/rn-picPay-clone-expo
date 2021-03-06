import React from "react";
import { Text } from "react-native";
import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";
import { Suggestions, Activeties, Tips, Banner } from "../../components";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
        <BalanceContainer>
          <BalanceTitle>Meu saldo </BalanceTitle>
          <Balance>R$ 00,00</Balance>
        </BalanceContainer>

        <AntDesign name="gift" size={30} color="#10c86e" />
      </Header>

      <Suggestions />
      <Container>
        <Activeties />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
