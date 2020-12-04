import React from "react";

const Counter = React.lazy(() => import("../Counter"));

function App() {
  const [showCounter, setshowCounter] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "2rem",
      }}
    >
      <label style={{ marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={showCounter}
          onChange={(e) => setshowCounter(e.target.checked)}
        />
        {" show Counter"}
      </label>
      <div style={{ width: 400, height: 400 }}>
        <React.Suspense fallback={<p>loading</p>}>
          {showCounter ? <Counter /> : null}
        </React.Suspense>
      </div>
    </div>
  );
}
export default App;
