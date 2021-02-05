import "./App.css";
import { useState, useEffect } from "react";
import Meme from "./components/Meme";
import MemeCard from "./components/Meme_card";
function objectToQueryParams(obj) {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
}
function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((resp) =>
      resp.json().then((result) => setTemplates(result.data.memes))
    );
  }, []);
  function setTheTopText(e) {
    setTopText(e.target.value);
  }
  function setTheBottomText(e) {
    setBottomText(e.target.value);
  }
  if (meme) {
    return <MemeCard meme={meme} />;
  }
  return (
    <div className="App">
      {template && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            //creating custom meme logic here
            const params = {
              template_id: template.id,
              text0: topText,
              text1: bottomText,
              username: "xzk03017",
              password: "xzk03017@cndps.com",
            };

            const response = await fetch(
              `https://api.imgflip.com/caption_image${objectToQueryParams(
                params
              )}`
            );
            const data = await response.json();
            setMeme(data.data.url);
          }}
        >
          <h1>Text for the Meme</h1>
          <Meme template={template} />
          <input
            placeholder="Top Text"
            value={topText}
            onChange={setTheTopText}
          />
          <input
            placeholder="Bottom Text"
            value={bottomText}
            onChange={setTheBottomText}
          />
          <button type="submit">Generate Meme</button>
        </form>
      )}
      {!template && (
        <>
          <h1>Pick a template</h1>
          {templates.map((template, index) => (
            <Meme
              template={template}
              onClick={() => {
                setTemplate(template);
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
