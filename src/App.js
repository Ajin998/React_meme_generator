import "./App.css";
import { useState, useEffect } from "react";
import Meme from "./components/Meme";
function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((resp) =>
      resp.json().then((result) => setTemplates(result.data.memes))
    );
  });
  return (
    <div className="App">
      {template && (
        <>
          <h1>Text for the Meme</h1>
          <Meme template={template} />
        </>
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
