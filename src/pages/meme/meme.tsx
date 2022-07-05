import { useState, useEffect } from "react";
import "./memeboi.css";
// import styled, { css } from "styled-components";

// // Styling components using styled-components
// const StyledForms = styled.div`
//   display: grid;
//   grid-template: 40px 40px / 1fr 1fr;
//   gap: 17px;
//   margin-bottom: 17px;
// `;
// const StyledInputs = styled.input`
//   font-family: "Karla", sans-serif;
//   border-radius: 5px;
//   border: 1px solid #d5d4d8;
//   text-indent: 5px;
// `;
// const StyledButton = styled.button`
//   grid-column: 1 / -1;
//   font-family: "Karla", sans-serif;
//   border-radius: 5px;
//   background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
//   color: white;
//   border: none;
//   cursor: pointer;
// `;
// const StyledMeme = styled.div`
//   position: relative;
// `;
// const MemeImg = styled.img`
//   max-width: 100%;
//   border-radius: 3px;
// `;
// const MemeHeaders = styled.h2`
//   position: absolute;
//   width: 80%;
//   text-align: center;
//   left: 50%;
//   transform: translateX(-50%);
//   margin: 15px 0;
//   padding: 0 5px;
//   font-family: impact, sans-serif;
//   font-size: 2em;
//   text-transform: uppercase;
//   color: white;
//   letter-spacing: 1px;
//   text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
//     -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
//     2px 2px 5px #000;

//   ${(props) =>
//     props.top &&
//     css`
//       top: 0;
//     `}

//   ${(props) =>
//     props.bottom &&
//     css`
//       bottom: 0;
//     `}
// `;

type Meme = {
  box_count: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};

export default function Meme() {
  // Setting state and initialising the first state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState<Meme[]>([]);
  // Using useEffect to handle the meme retreaver function which places all memes on an array.
  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMeme();
  }, []);
  // the function called whenever the button is clicked. This gets a random image from the array.
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  // Handles text changes of the inboxes
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="memeForms">
        <input className="memeInputs"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input className="memeInputs"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="memeButton" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="memediv">
        <img className="memeImg" src={meme.randomImage} />
        <h2 className="memeh2 top">{meme.topText}</h2>
        <h2 className="memeh2 bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
