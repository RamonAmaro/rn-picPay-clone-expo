import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Switch } from "react-native";
import creditCard from "../../images/credit-card.png";
import {
  Action,
  ActionLabel,
  Actions,
  AddButton,
  AddLabel,
  BalanceContainer,
  Bold,
  Card,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle,
  CreditCard,
  EyeButton,
  Header,
  HeaderContainer,
  Info,
  PaymenMethods,
  PaymentMethodsTitle,
  Title,
  UseBalance,
  UseBalanceTitle,
  UseTicketButton,
  UseTicketLabel,
  Value,
  Wrapper,
} from "./styles";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52E78C", "#1AB563"] : [`#d3d3d3`, `#868686`]}
      >
        <HeaderContainer>
          <Title> Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold> {isVisible ? "00,00" : "-- --"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                color="#fff"
                size={28}
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu Saldo esta rendendo 100% CDI.</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel> Adicionar </ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel> Retirar </ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymenMethods>
        <PaymentMethodsTitle> Formas de pagamento </PaymentMethodsTitle>
      </PaymenMethods>
      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle> Cadastre seu cartão de crédito. </CardTitle>
            <CardInfo>
              Cadastre um cartão de crédito para poder fazer pagamentos, mesmo
              quando nao tiver saldo no seu picpay.
            </CardInfo>
          </CardDetails>
          <CreditCard source={creditCard} resizeMode="contain" />
        </CardBody>
        <AddButton>
          <AntDesign name="pluscircleo" color="#0db060" size={32} />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>
      </Card>

      <UseTicketButton>
        <MaterialCommunityIcons
          name="ticket-outline"
          size={32}
          color="#0db060"
        />

        <UseTicketLabel> Usar código promocional </UseTicketLabel>
      </UseTicketButton>
    </Wrapper>
  );
}
