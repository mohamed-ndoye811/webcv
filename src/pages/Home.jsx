import React from "react";
import blob from "../utils/img/blob.svg";

export default function Home() {
  return (
    <main className="homePage">
      <div className="container">
        <h2 className="text">
          I am a
          <br />
          Front-end
          <br />
          web developer
        </h2>

        <div className="profilePic">
          <img src={blob} alt="" srcset="" />
        </div>
      </div>
    </main>
  );
}
