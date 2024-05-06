import { styled } from "styled-components";
import Arrows from "../../UI/Arrows";
import Input from "../../UI/Input";
import User from "../../UI/User";

const Container = styled.header`
  height: 6rem;
  background-color: #000000;
  color: #fff;
  display: flex;
  gap: 5%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <User />
      <Card>
        <Arrows />
        <Input />
      </Card>
    </Container>
  );
};

export default Header;
