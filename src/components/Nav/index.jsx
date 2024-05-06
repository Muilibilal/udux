import { styled } from "styled-components";
import { BackgroundVector } from "../../assets/svgs";
import { renderToStaticMarkup } from "react-dom/server";
import NavContent from "../../UI/NavContent";
import { NavData } from "../../data";

const svgString = encodeURIComponent(
  renderToStaticMarkup(<BackgroundVector />)
);

const Container = styled.nav`
  background-image: url("data:image/svg+xml,${svgString}");
  background-color: #000;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-top: 20px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: orange;
    outline: none;
  }

  &::-moz-scrollbar {
    width: 3px;
  }

  &::-moz-scrollbar-track {
    box-shadow: inset 0 0 6px transparent;
  }

  &::-moz-scrollbar-thumb {
    background-color: orange;
    outline: none;
  }
`;

function Nav() {
  return (
    <Container>
      {NavData.map((item, idx) => {
        return (
          <NavContent
            key={idx}
            images={item.images}
            text={item.name}
            lists={item.lists}
          />
        );
      })}
    </Container>
  );
}

export default Nav;
