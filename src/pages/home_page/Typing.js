import React from "react";
import Typewriter from "typewriter-effect";
import profile_data from "../../utils/const";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: profile_data.typing,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typing;
