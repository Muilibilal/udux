import styled, { css } from "styled-components";
import { useColor } from "color-thief-react";
import formatText from "../../data";

const PlaylistStyle = styled.section`
  width: 250px;
  padding: 40px 0 15px 0;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 1px solid #fff;
    z-index: 50;
  }

  section {
    width: 100%;
  }

  div {
    width: 80%;
    margin: 0 auto;
    margin-top: -20px;
    padding: 20px 0;
    background-color: #000;
    position: relative;
    box-shadow: #000 0px 20px 30px -10px;
    img {
      display: block;
      margin: 0 auto;
      width: 80%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border: 1px solid #fff;
      border-bottom: none;
    }
  }

  span {
    position: relative;
    display: block;
    max-width: 100%;
    margin: 0 auto;
    padding: 5px 15px;
    background: ${({ color }) => color};
    background: ${({ color }) =>
      color &&
      css`linear-gradient(90deg, ${color} 0%, ${color}CE 35%, ${color}00 100%)`};
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    z-index: 10;
    color: #fff;
  }
`;

const PlaylistContent = styled.div`
  width: 100%;
  background-color: #000;
  position: relative;
  box-shadow: #000 0px 20px 30px -10px;

  img {
    display: block;
    margin: 0 auto;
    width: 80%;
  }
`;

function PlayList({ image, title, info }) {
  const { data: colorData } = useColor(image, "hex");

  return (
    <PlaylistStyle color={colorData}>
      <section
        style={{
          backgroundColor: `${colorData}`,
        }}
      >
        <PlaylistContent>
          <img src={image} alt={title} />
        </PlaylistContent>

        <span style={{ backgroundColor: `${colorData}` }}>
          <h3>{title}</h3>
          <p>{formatText(info, 5)}</p>
        </span>
      </section>
    </PlaylistStyle>
  );
}

export default PlayList;
