import React, { useState } from "react";
import "./SpinWheels.css";

function SpinWheels() {
  const [name, setname] = useState({ name: "circle" });
  const [loading, setLoading] = useState(false);
  const startRotation = () => {
    setname({ name: "circle startRotate" });
    setLoading(true);
    setTimeout(() => {
      setname({ name: "circle startRotate stopRotate" });
      setLoading(false);
    }, Math.floor(Math.random() * 10000) + 1);
  };
  return (
    <div>
      <div className="arrow"></div>
      <ul className={name.name}>
        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">2</div>
        </li>
        <li>
          <div className="text">3</div>
        </li>
        <li>
          <div className="text">4</div>
        </li>
        <li>
          <div className="text">5</div>
        </li>
        <li>
          <div className="text">6</div>
        </li>
        <li>
          <div className="text">7</div>
        </li>
        <li>
          <div className="text">8</div>
        </li>
        <li>
          <div className="text">9</div>
        </li>
        <li>
          <div className="text">10</div>
        </li>
        <li>
          <div className="text">11</div>
        </li>
        <li>
          <div className="text">12</div>
        </li>
      </ul>
      <button
        className={loading ? "disableBtn" : "spinBtn"}
        onClick={startRotation}
        disabled={loading ? true : false}>
        {loading ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}

export default SpinWheels;
