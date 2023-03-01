import React, { useState } from "react";
import LuckyWheel from "react-wheel-of-prizes";

const LuckySpin = () => {
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    // Set a random angle between 0 and 360 for the spin
    const randomAngle = Math.floor(Math.random() * 360);
    // After the spin is complete, set spinning to false
    setTimeout(() => setSpinning(false), 5000);
  };

  return (
    <div>
      <h1>Lucky Spin Game</h1>
      <LuckyWheel
        segments={[
          { segColors: "#FF0000", text: "Prize 1" },
          { segColors: "#00FF00", text: "Prize 2" },
          { segColors: "#0000FF", text: "Prize 3" },
          { segColors: "#FF00FF", text: "Prize 4" },
          { segColors: "#00FFFF", text: "Prize 5" },
          { segColors: "#FFFF00", text: "Prize 6" },
        ]}
        onStop={() => setSpinning(false)}
        spinning={spinning}
        randomizeAngle={true}
        onStopSpinning={(value) => console.log(`You won ${value.text}`)}
      />
      <button onClick={handleSpin} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
};

export default LuckySpin;
