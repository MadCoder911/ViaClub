import styled from "styled-components";
import LandingBtn from "./LandingBtn";
const LandingComponent = () => {
  return (
    <div className="container">
      <Wrapper>
        <h1>
          YOUR GATE <br />
          TO MULTINATIONALS
        </h1>
        <LandingBtn />
      </Wrapper>
    </div>
  );
};
export default LandingComponent;
const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  display: grid;
  align-items: center;
  transform: translate(-50%, -40%);
  h1 {
    text-align: center;
    font-size: 50px;
  }
`;
