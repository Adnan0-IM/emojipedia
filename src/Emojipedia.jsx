import React from "react";
import Template from "./Template";
import emojiwiki from "./emojiwiki";

const Emojipedia = () => {
  return emojiwiki.map((details) => {
    return (
      <Template
        key={details.id}
        emoji={details.emoji}
        name={details.name}
        meaning={details.meaning}
      />
    );
  });
};

export default Emojipedia;
