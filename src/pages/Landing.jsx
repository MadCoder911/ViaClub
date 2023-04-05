import NavBar from "../components/NavBar";
import styled from "styled-components";
import landingImage from "../assets/Images/landing-image.jpg";
import LandingComponent from "../components/LandingComponent";
const Landing = () => {
  return (
    <Wrapper>
      <NavBar />
      <LandingComponent />
    </Wrapper>
  );
};
export default Landing;
const Wrapper = styled.div`
  height: 100vh;
  color: white;
  background-image: url(${landingImage});
`;
