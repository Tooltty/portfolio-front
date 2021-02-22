import { useSpeechRecognition } from "react-speech-kit";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import "./Mic.css";

export default function Mic() {
  const [startStop, setStartStop] = useState(true);

  const history = useHistory();

  const onResult = (result) => {
    console.log(result);
    if (result.includes("project" || "Project" || "projects" || "Projects")) {
      console.log(`The word "project" was recognized: ${result}`);
      stop();
      setStartStop(true);
      history.push("/pfprojects");
    }
    if (result.includes("about this" || "About this")) {
      // history.push("/projects");
      console.log(`The phrase "about this" was recognized: ${result}`);
      stop();
      setStartStop(true);
      history.push("/aboutthis");
    }
    if (result.includes("about me" || "About me")) {
      // history.push("/projects");
      console.log(`The phrase "about me" was recognized: ${result}`);
      stop();
      setStartStop(true);
      history.push("/aboutme");
    }
    if (result.includes("administrador" || "Administrador")) {
      // history.push("/projects");
      console.log(`The word "administrador" was recognized: ${result}`);
      stop();
      setStartStop(true);
      history.push("/admin");
    }
    if (result.includes("login" || "Login")) {
      // history.push("/projects");
      console.log(`The word "login" was recognized: ${result}`);
      stop();
      setStartStop(true);
      history.push("/login");
    }
    if (result.includes("home" || "Home")) {
      // history.push("/projects");
      console.log(`The word "home" was recognized: ${result}`);
      stop();
      setStartStop(true);
      history.push("/");
    }
  };

  const { listen, stop } = useSpeechRecognition({
    onResult,
  });

  const micActivation = () => {
    if (startStop === true) {
      listen();
      setStartStop(false);
    } else {
      stop();
      setStartStop(true);
    }
  };

  return (
    <>
      <div className="mic">
        <p className="legend">Press here and say → which page to go</p>
        <button
          className="fa fa-microphone fa-2x mic-color"
          onClick={micActivation}
        ></button>
      </div>
    </>
  );
}
