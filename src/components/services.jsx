import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Image } from "./image";

import { faShip} from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';

library.add( faShip)

export const Services = (props) => {

  let content = {
    English: {
      block1: "What We Offer",
      block2: "We pride ourselves on curating exceptional experiences that cater to every maritime desire. Whether you're seeking a brief day of indulgence or an extended nautical adventure, our offerings are designed to exceed your expectations.",
      block3: "1-Day Trips: A Day of Luxury on the Open Sea",
      block4: "For those yearning for a quick escape, our 1-day trips provide the perfect dose of luxury and relaxation. Cruise along picturesque coastlines, explore secluded coves, and immerse yourself in the tranquility of the open sea. Our meticulously maintained yachts, featuring state-of-the-art amenities and luxurious interiors, ensure that your day on the water is nothing short of extraordinary.",
      block5: "Up to 2 Weeks Charter: Extended Nautical Bliss",
      block6: "For those with a penchant for extended voyages, our up to 2 weeks charters offer the ultimate escape. Immerse yourself in the luxury of a private yacht as you chart a course to diverse destinations, from hidden gems to iconic coastal havens. Our fleet of vessels, ranging from sleek sailboats to opulent motor yachts, ensures that your extended voyage is tailored to your preferences. Experience the freedom to explore multiple destinations, each offering unique landscapes, cultural treasures, and unforgettable moments. From vibrant sunsets at sea to thrilling water sports and onshore excursions, our 2-week charters are a passport to a world of maritime bliss.",
    },
    Polski: {
        block1: "Oferta",
        block2: "Jesteśmy dumni z tego, że możemy zapewnić wyjątkowe doświadczenia, które zaspokoją każde morskie pragnienie. Niezależnie od tego, czy szukasz krótkiego dnia przyjemności, czy dłuższej przygody morskiej, nasza oferta została zaprojektowana tak, aby przekroczyć Twoje oczekiwania.",
        block3: "Wycieczki 1-dniowe: Dzień luksusu na otwartym morzu",
        block4: "Dla tych, którzy pragną szybkiej ucieczki, nasze jednodniowe wycieczki zapewniają idealną dawkę luksusu i relaksu. Rejsuj wzdłuż malowniczych wybrzeży, zwiedzaj zaciszne zatoczki i zanurz się w spokoju otwartego morza. Nasze starannie utrzymane jachty, wyposażone w najnowocześniejsze udogodnienia i luksusowe wnętrza, sprawią, że Twój dzień na wodzie będzie po prostu niezwykły.",
        block5: "Charter 2 tygodniowy: Morskie szczęście na dłużej",
        block6: "Dla tych, którzy lubią dłuższe podróże, nasze czartery trwające do 2 tygodni oferują najlepszą ucieczkę. Zanurz się w luksusie prywatnego jachtu, wyznaczając kurs do różnych miejsc, od ukrytych klejnotów po kultowe przybrzeżne raje. Nasza flota statków, od eleganckich żaglówek po luksusowe jachty motorowe, gwarantuje, że Twój dłuższy rejs będzie dostosowany do Twoich preferencji. Poczuj swobodę odkrywania wielu miejsc, z których każdy oferuje unikalne krajobrazy, skarby kultury i niezapomniane chwile. Od tętniących życiem zachodów słońca na morzu po ekscytujące sporty wodne i wycieczki lądowe – nasze dwutygodniowe czartery są paszportem do świata morskiej rozkoszy.",
      }
    }


  props.language === "Polski"
  ? (content = content.Polski)
  : (content = content.English);

  return (
    <div id='offer' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='title'>{content.block1}</h2>

          <h3 className='wstep'>{content.block2}</h3>
          <div className='box-wycieczka'>
          <h3 className='wycieczki'> <FontAwesomeIcon className='my_icon' icon={faShip}/><b>{content.block3}</b></h3>
          <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? <Fragment>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image largeImage={props.data[0].largeImage} smallImage={props.data[0].smallImage} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                <Image largeImage={props.data[1].largeImage} smallImage={props.data[1].smallImage} />
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
              <Image largeImage={props.data[2].largeImage} smallImage={props.data[2].smallImage} />
            </div>
            </Fragment>
              
              : 'Loading...'}
          </div>
        </div>
          
          <p className='main-content'>{content.block4}</p>
          </div>
          <div className='box-wycieczka'>
          <h3 className='wycieczki'> <FontAwesomeIcon className='my_icon' icon={faShip}/><b>{content.block3}</b></h3>
          <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? <Fragment>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image largeImage={props.data[3].largeImage} smallImage={props.data[3].smallImage} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                <Image largeImage={props.data[4].largeImage} smallImage={props.data[4].smallImage} />
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
              <Image largeImage={props.data[8].largeImage} smallImage={props.data[8].smallImage} />
            </div>
            </Fragment>
              
              : 'Loading...'}
          </div>
        </div>
        
          <p className='main-content'>{content.block4}</p>
          </div>
          
          </div>
          </div>
      </div>
   
  )
}
