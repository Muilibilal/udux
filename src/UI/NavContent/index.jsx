import styled from "styled-components";
import { css } from "styled-components";

import NavImageComponent from "./NavImgComponent";
import formatText from "../../data";
import SmallScreenNav from "../SmallScreenNav";

// import PropTypes from "prop-types";
// NavContent.propTypes = {
//   hasList: PropTypes.bool,
//   images: PropTypes.string,
//   text: PropTypes.string,
// };

const ContentStyle = styled.div`
  display: flex;
  cursor: pointer;
  gap: 20px;
  padding: 10px 15px;
  color: #fff;

  @media screen and (max-width: 800px) {
    display: none;
  }

  ${({ currenttext }) =>
    currenttext === "My Playlist" &&
    css`
      margin-top: 20px;
    `}

  ${({ currenttext }) =>
    currenttext === "Your Library" &&
    css`
      margin-top: 20px;
    `}
  
  ${({ currenttext }) =>
    currenttext === "Liked Songs" &&
    css`
      color: orange;
    `}
`;

const ListStyle = styled.ul`
  color: #fff;
  list-style-type: none;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 800px) {
    display: none;
  }

  li {
    cursor: pointer;
  }
`;

function NavContent({ lists, images, text }) {
  return lists ? (
    <>
      <ContentStyle currenttext={text}>
        <NavImageComponent index={0} images={images} />
        <span>{text}</span>
        <NavImageComponent index={1} images={images} />
      </ContentStyle>
      {lists?.length > 0 && <List lists={lists} />}
    </>
  ) : (
    <>
      <ContentStyle currenttext={text}>
        <NavImageComponent index={0} images={images} />
        <span>{text}</span>
        {images.length > 1 && <NavImageComponent index={1} images={images} />}
      </ContentStyle>
      <SmallScreenNav index={0} images={images} currentText={text} />
    </>
  );
}

function List({ lists }) {
  return (
    <ListStyle>
      {lists.map((list, idx) => (
        <li key={idx}>{formatText(list, 4)}</li>
      ))}
    </ListStyle>
  );
}

export default NavContent;
