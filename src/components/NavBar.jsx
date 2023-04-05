import logo from "../assets/Images/navbar-logo.svg";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Wrapper className="container">
      <img src={logo} alt="logo" className="img" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Teams</li>
        <li>Contact Us</li>
      </ul>
    </Wrapper>
  );
};
export default NavBar;
const Wrapper = styled.nav`
  img {
    cursor: pointer;
    width: 125px;
  }
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-between;
    color: black;
    li {
      margin-left: 40px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      color: white;
    }
  }
`;
