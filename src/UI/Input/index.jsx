import { css, styled } from "styled-components";
import { SearchIcon } from "../../assets/svgs";

const SearchStyle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 50px;
  background-color: #0f0f0f;
  padding: 5px 20px;

  input {
    background-color: transparent;
    color: #fff;
    font-size: 1.1rem;
    letter-spacing: 2px;
    width: 700px;
    height: 100%;
    padding: 10px 5px;
    border: none;
    outline: none;
  }

  /* ${({ animateinput }) =>
    animateinput &&
    css`
      input {
        animation: animate-input 0.9s linear;
      }
    `}
  @keyframes
    animate-input {
    0% {
      width: 0px;
    }
    25% {
      width: 100px;
    }
    50% {
      width: 200px;
    }
    75% {
      width: 300px;
    }
    100% {
      width: 400px;
    }
  } */
`;

const SearchIconStyle = styled(SearchIcon)`
  transform: scale(1.5);
  cursor: pointer;
`;

function Input() {
  // let [animate, setAnimate] = useState("false");

  // const handleAnimate = () => {
  //   setAnimate("true");

  //   setTimeout(() => {
  //     setAnimate("false");
  //   }, 1000);
  // };

  return (
    <form action="post">
      <SearchStyle>
        {/* <SearchStyle animateinput={animate}> */}
        {/* <label htmlFor="text-search" onClick={handleAnimate}> */}
        <label htmlFor="text-search">
          <SearchIconStyle />
        </label>
        <input type="text" name="text" id="text-search" autoComplete="off" />
      </SearchStyle>
    </form>
  );
}

export default Input;
