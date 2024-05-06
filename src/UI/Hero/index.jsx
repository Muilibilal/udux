import styled from "styled-components";
import { renderToStaticMarkup } from "react-dom/server";
import { HeroBgImage, OmahLayText } from "../../assets/svgs";
import { HeroIcon } from "../../assets/images";

const svgString = encodeURIComponent(renderToStaticMarkup(<HeroBgImage />));

const Container = styled.div`
  background-image: url("data:image/svg+xml,${svgString}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 95%;
  height: 300px;
  margin: 20px auto;

  @media screen and (max-width: 800px) {
    height: 200px;
  }

  img {
    position: absolute;
    top: 1rem;
    left: 1.5rem;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

const StyledOmahLayText = styled(OmahLayText)`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

function Hero() {
  return (
    <Container>
      <img src={HeroIcon} alt="udux icon" />
      <StyledOmahLayText />
    </Container>
  );
}

export default Hero;
