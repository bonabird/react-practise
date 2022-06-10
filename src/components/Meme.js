import { useState, useEffect } from "react"
import styled, { css } from "styled-components"

// Styling components using styled-components
const StyledForms = styled.div`
display: grid;
grid-template: 40px 40px / 1fr 1fr;
gap: 17px;
margin-bottom: 17px;
`
const StyledInputs = styled.input`
font-family: "Karla", sans-serif;
border-radius: 5px;
border: 1px solid #D5D4D8;
text-indent: 5px;
`
const StyledButton = styled.button`
grid-column: 1 / -1;
font-family: "Karla", sans-serif;
border-radius: 5px;
background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
color: white;
border: none;
cursor: pointer;
`
const StyledMeme = styled.div`
position: relative;
`
const MemeImg = styled.img`
max-width: 100%;
border-radius: 3px;
`
const MemeHeaders = styled.h2`
position: absolute;
width: 80%;
text-align: center;
left: 50%;
transform: translateX(-50%);
margin: 15px 0;
padding: 0 5px;
font-family: impact, sans-serif;
font-size: 2em;
text-transform: uppercase;
color: white;
letter-spacing: 1px;
text-shadow:
    2px 2px 0 #000,
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    0 2px 0 #000,
    2px 0 0 #000,
    0 -2px 0 #000,
    -2px 0 0 #000,
    2px 2px 5px #000;

    ${props => props.top && css`
    top: 0;
    `}

    ${props => props.bottom && css `
    bottom: 0;
    `}
`

export default function Meme() {
    // Setting state and initialising the first state
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    // Using useEffect to handle the meme retreaver function which places all memes on an array.
    useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])
    // the function called whenever the button is clicked. This gets a random image from the array.
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    // Handles text changes of the inboxes
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <StyledForms>
                <StyledInputs
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <StyledInputs
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <StyledButton
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </StyledButton>
            </StyledForms>
            <StyledMeme>
                <MemeImg src={meme.randomImage} />
                <MemeHeaders top>{meme.topText}</MemeHeaders>
                <MemeHeaders bottom>{meme.bottomText}</MemeHeaders>
            </StyledMeme>
        </main>
    )
}