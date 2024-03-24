import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
      languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  

  return (
    <div>
       <Navigation
          language={language}
          handleSetLanguage={language => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />

      
      <Header language={language} />
      <About language={language}/>
      <Services language={language} data={landingPageData.Portfolio}/>
      <Features language={language} data={landingPageData.Portfolio}/>
      <Gallery  language={language} data={landingPageData.Gallery}/>
      <Contact language={language}/>
     
    </div>
  );
    }

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
