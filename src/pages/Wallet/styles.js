import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const Info = styled(Title)`
  font-size: 14px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  justify-content: center;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;
export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymenMethods = styled.View`
  margin-top: 25px;
  padding: 0 12px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 16px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 14px;
`;
export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const CardInfo = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 4px;
  margin-top: 15px;
`;

export const CreditCard = styled.Image`
  width: 60px;
  height: 60px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;
export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 30px;
`;

export const UseTicketLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`;
