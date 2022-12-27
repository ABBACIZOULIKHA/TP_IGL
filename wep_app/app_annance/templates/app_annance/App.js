// import logo from './logo.svg';
// import './App.css';
import Header from "./Components/FirstPage/Header";
//import FirstSection from "./Components/FirstPage/FirstSection";
import SecondSection from "./Components/FirstPage/SecondSection";
import AboutusSection from "./Components/FirstPage/AboutusSection";
import LastSection from "./Components/FirstPage/LastSection";
import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";

//Second Section

import SecondHeader from "./Components/SecondSection/SecondHeader";
import FirstSection2 from "./Components/SecondSection/FirstSection2";
import SecondSection2 from "./Components/SecondSection/SeondSection2";
import FindMoreSection from "./Components/SecondSection/FindMoreSection";

// first section new version
import FirstSection from "./Components/FirstPage2/FirstSection";

function App() {
  return (
    <div>
      {/* <Header />
      <FirstSection />
      <SecondSection />
      <AboutusSection />
      <LastSection /> */}

      {
        // Second Section
      }

      {/* <SecondHeader />
      <FirstSection2 />
      <SecondSection2 />
      <FindMoreSection /> */}

      <FirstSection />
    </div>
  );
}

export default App;
