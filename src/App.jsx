import { styled } from "styled-components";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

const ContentStyle = styled.div`
  display: grid;
  grid-template-columns: 16rem auto;
  height: calc(100vh - 6rem);

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export default function App() {
  return (
    <>
      <Header />

      <ContentStyle>
        <Nav />
        <Main />
      </ContentStyle>
    </>
  );
}
