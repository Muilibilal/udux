import styled from "styled-components";

const PlaylistCardStyle = styled.aside`
  width: 90%;
  margin: 0 auto;

  h2 {
    color: #fff;
    font-size: 2.1rem;
    grid-column: 1 / last;
  }
`;

const Scroll = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function PlaylistCard({ text, children }) {
  return (
    <PlaylistCardStyle>
      <h2>{text}</h2>
      <Scroll>{children}</Scroll>
    </PlaylistCardStyle>
  );
}

export default PlaylistCard;
