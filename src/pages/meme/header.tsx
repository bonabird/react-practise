import React from "react";
import pic from "../../images/spiral.svg";
import "./memeboi.css";
// import styled from 'styled-components'

// // Styling components using styled-components
// const StyledHeader = styled.header`
// display: flex;
// align-items: center;
// height: 65px;
// background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
// color: white;
// padding: 20px;
// `
// const StyledImg = styled.img`
// height: 100%;
// margin-right: 6px;
// `
// const StyledTitle = styled.h2`
// font-size: 1.25rem;
// margin-right: auto;
// `
// const StyledProject = styled.h4`
// font-size: 0.75rem;
// font-weight: 500;
// `

export default function Header() {
  return (
    <header className="headerheader">
      <img className="headerimg" src={pic} />
      <h2  className="headerh2">Meme Generator</h2>
      <h4  className="headerh4">React Course - Project 3</h4>
    </header>
  );
}
