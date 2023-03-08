import React from "react"

export default function Generator({ data }) {

    var [meme, setMeme] = React.useState({
        upperText: "document.getElementById('top-text').value",
        lowerText: "document.getElementById('bottom-text').value",
        randomImg: data[Math.floor(Math.random() * data.length)].url
    })

    function generateImgUrl() {
        setMeme(prevMeme => {
            return {
                // upperText: document.getElementById('top-text').value,
                // lowerText: document.getElementById('bottom-text').value,
                ...prevMeme,
                randomImg: data[Math.floor(Math.random() * data.length)].url
            }
        })
    }
    return (
        <div className="main">
            <div className="header-bar">
                <div></div>
                <h3>Meme Generator</h3>
                <p>React Course - Project 3</p>
            </div>
            <div className="input-form">
                <div className="inputs">
                    <input type="text" name="upper-text" placeholder="Upper Text" id="upper-text" />
                    <input type="text" name="lower-text" placeholder="Lower Text" id="lower-text" />
                </div>
                <button className="get-img" onClick={generateImgUrl}>Select Meme Image🖼️</button>
            </div>
            <div className="img-container">
                <p id="top-text">{meme.upperText}</p>
                <p id="bottom-text">{meme.lowerText}</p>
                <img src={meme.randomImg} alt="image-not-found" className="meme-img" />
            </div>
        </div>
    )
}