
import "./App.css";
//components
import Header from "./compomemts/Header/Header";
import Enjoy from "./compomemts/Enjoy/Enjoy";
import Download from "./compomemts/Download/Download";
import Watch from "./compomemts/Watch/Watch";
import Kids from "./compomemts/Kids/Kids";
import Footer from "./compomemts/Footer/Footer";
import Questions from "./compomemts/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />
      <Questions/>
      <Footer />
    </div>
  );
}

export default App;
