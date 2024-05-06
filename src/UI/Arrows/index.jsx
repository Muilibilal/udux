import { styled } from "styled-components";
import { ArrowRight, ArrowLeft } from "../../assets/svgs";

const ArrowLeftStyled = styled(ArrowLeft)`
  transform: scale(1);
  cursor: pointer;
`;

const ArrowRightStyled = styled(ArrowRight)`
  transform: scale(1);
  cursor: pointer;
`;

function Arrows() {
  return (
    <>
      <ArrowLeftStyled />
      <ArrowRightStyled />
    </>
  );
}

export default Arrows;
