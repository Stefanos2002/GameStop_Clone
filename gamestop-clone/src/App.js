import "./App.css";
import Nav from "./Nav";
import PromoBanner from "./PromoBanner";
import FirstAdd from "./FirstAdd";
import SlidingBanner from "./SlidingBanner";

function App() {
  const slides = [
    {
      url: "//media.gamestop.com/i/gamestop/SSG_Spend250Save25_EG_1760x400_Hero_D.jpeg",
    },
    {
      url: "//media.gamestop.com/i/gamestop/FinalFantasy7Rebirth_POGWP_WK34_1760x400_Hero_D.jpeg",
    },
  ];
  return (
    <div className="app">
      <Nav />
      <PromoBanner />
      <FirstAdd />
      <a href="/">
        <div className="sliding-banner">
          <SlidingBanner slides={slides} />
        </div>
      </a>
    </div>
  );
}

export default App;
