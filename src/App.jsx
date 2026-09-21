import earthImage from "./assets/earth.png";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>

      <img
        src={earthImage}
        alt="Cute Earth"
        width="500"
      />
    </div>
  );
}

export default App;