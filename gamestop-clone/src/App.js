import "./App.css";
import Nav from "./Nav";
import PromoBanner from "./PromoBanner";
import FirstAdd from "./FirstAdd";
import SlidingBanner from "./SlidingBanner";

function App() {
  return (
    <div className="app">
      <Nav />
      <PromoBanner />
      <FirstAdd />
      <SlidingBanner />
    </div>
  );
}

export default App;
