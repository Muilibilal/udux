import styled from "styled-components";

const SmallScreenNavStyle = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: inline-block;
  }
`;

function SmallScreenNav({ images, currentText }) {
  return images.map((ImageComponent, i) =>
    currentText !== "Recently Played" && currentText !== "Liked Songs" ? (
      <SmallScreenNavStyle key={i}>
        <ImageComponent />
      </SmallScreenNavStyle>
    ) : (
      " "
    )
  );
}

export default SmallScreenNav;
