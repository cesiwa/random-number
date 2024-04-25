import React, { useState } from "react";

function App() {
  const [minNumber, setMinNumber] = useState();
  const [maxNumber, setmaxNumber] = useState();
  const [randomNumber, setRandomNumber] = useState();

  const generateRandomNumber = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    );
  };
  return (
    <div className="App" style={styles.app}>
      <div style={styles.container}>
        <div>
          <p>
            Random Number : <span>{randomNumber}</span>
          </p>
        </div>

        <div>
          <div>
            <p>
              Min: <span>{minNumber}</span>
            </p>
            <input
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(+e.target.value)}
            ></input>
          </div>
          <div>
            <p>
              Max: <span>{maxNumber}</span>
            </p>
            <input
              type="number"
              value={maxNumber}
              onChange={(e) => setmaxNumber(+e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <button onClick={generateRandomNumber}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  app: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "pink",
  },
  container: {
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px",
    width: "50%",
    borderRadius: "12px",
    gap: "18px",
  },
};
