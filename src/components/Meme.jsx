import React from "react";
import "../App.css";

const Meme = ({ template, onClick, key }) => {
  return (
    <img
      src={template.url}
      key={template.id}
      alt={template.name}
      className="meme__images"
      onClick={onClick}
      style={{ width: 200 }}
    />
    // <p>
    //   <img
    //     key={index}
    //     src={template.url}
    //     alt={template.name}
    //     style={{ width: 200 }}
    //     className="meme__images"
    //   />
    // </p>
  );
};

export default Meme;
