import React from "react";
import { useState } from "react";

import Showcon from "./Showcon";
import Data from "./Data";
function Showdata() {
  const [questions, setQuestions] = useState(Data);
  return (
    <div>
      <div
        style={{
          padding: "3rem",
          background: "#000",
          color: "#fff",
          textAlign: "center",
          borderBottom: "8px solid #222",
        }}
      >
        <h3 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
          Frequently Asked Questions
        </h3>
        {/* loopกล่อง  */}
        {questions.map((question) => {
          return <Showcon key={question.id} {...question} />;
        })}
        {/* กล่องใส่ Email */}
        <p style={{ margin: "2rem 0", fontSize: "1.2rem" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          style={{ width: "500px", padding: "1.5rem 1rem" }}
          type="email"
          placeholder="Email Address"
        />
        <button
          style={{
            width: "200px",
            padding: "1.2rem 1rem",
            color: "#fff",
            backgroundColor: "#e50914",
            fontSize: "1.5rem",
            border: "none",
            position: "relative",
            top: "4px",
          }}
          type="submit"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Showdata;
