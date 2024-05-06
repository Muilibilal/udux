import { UserAvatar } from "../../assets/images";
import { styled } from "styled-components";

const UserStyle = styled.div`
  background-color: #0f0f0f;
  min-width: 200px;
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;

  img {
    width: 40;
    aspect-ratio: 1;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const User = () => {
  return (
    <UserStyle>
      <img src={UserAvatar} />
      <span style={{ fontSize: "1.1rem" }}>Hey! Aleem</span>
    </UserStyle>
  );
};

export default User;
