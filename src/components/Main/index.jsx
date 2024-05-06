import styled from "styled-components";
import Hero from "../../UI/Hero";
import PlayList from "../../UI/Playlist";
import PlaylistCard from "../../UI/PlaylistCard";
import { playlistData } from "../../data";

const MainStyle = styled.main`
  background-color: #000;
  width: calc(100vw - 16rem);
  max-width: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

// const Wrapper = styled.div`
//   overflow-x: scroll;
// `;

function Main() {
  return (
    <MainStyle>
      <Hero />
      <PlaylistCard text="Welcome Back!">
        <PlaylistMapper playlistData={playlistData} />
      </PlaylistCard>
      <PlaylistCard text="Cheers to the Weekend">
        <PlaylistMapper playlistData={playlistData} />
      </PlaylistCard>
    </MainStyle>
  );
}

const PlaylistMapper = ({ playlistData }) => {
  return playlistData.map(({ image, title, info }, idx) => (
    <PlayList key={idx} image={image} title={title} info={info} />
  ));
};

export default Main;
