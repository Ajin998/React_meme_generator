import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((resp) =>
      resp.json().then((result) => setTemplates(result.data.memes))
    );
  });
  return (
    <div className="App">
      <h1>Pick your Templates</h1>
      {templates.map((template, index) => (
        // <p>
        //   <img
        //     key={index}
        //     src={template.url}
        //     alt={template.name}
        //     style={{ width: 200 }}
        //     className="meme__images"
        //   />
        // </p>
        <img
          key={index}
          src={template.url}
          alt={template.name}
          style={{ width: 200 }}
          className="meme__images"
        />
      ))}
    </div>
  );
}

export default App;
