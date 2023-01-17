import React, { useState } from "react";

import { ShowQuestionsCon } from "./Styled";

function Showcon({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <ShowQuestionsCon>
      <div style={{ display: "flex", justifyContent: "center" }}>

        <div
          style={{
            background: "#303030",
            fontSize: "1.5rem",
            width: "750px",
            borderBottom: "1px solid #000",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
          }}
        >
          <h3 style={{ display: "flex", alignItems: "center" }}>{title}</h3>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "3rem",
              color: "#fff",
            }}
            onClick={() => setShowInfo(!showInfo)}
            
          >
            {showInfo ? "-" : "+"}
          </button>
        </div>
      </div>
      <div
        style={{ textAlign: "left", display: "flex", justifyContent: "center" }}
      >
        {/* กล่อง - */}
        {showInfo && (
          <p
            style={{
              background: "#303030",
              fontSize: "1.5rem",
              width: "750px",
              padding: "1rem 2rem",
              marginBottom: "0.5rem",
            }}
          >
            {info}
          </p>
        )}
      </div>
    </ShowQuestionsCon>
  );
}

export default Showcon;
