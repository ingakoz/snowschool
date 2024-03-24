import { Image } from "./image";
import { Fragment } from 'react';

export const Gallery = (props) => {

  let content = {
    English: {
      block1: "Gallery",
      block2: "Welcome to a world where the sun kisses the horizon, and the sea whispers tales of adventure. Our yacht charter experience is more than a journey; it's a visual symphony of luxury, elegance, and boundless horizons. Picture yourself aboard our meticulously curated fleet, each vessel a masterpiece on the water.",
      block3: "Offer",
      block4: "Gallery",
      block5: "Contact",
    },
    Polski: {
        block1: "Galeria",
        block2: "Witamy w Sea Escape Yacht Charters, gdzie luksus spotyka się z przygodą na pełnym morzu. Naszym celem jest zapewnienie niezapomnianych wrażeń tym, którzy szukają najlepszej morskiej eskapady. W Sea Escape wierzymy, że ocean ma niezrównaną zdolność inspirowania, odmładzania i łączenia ludzi z pięknem świata przyrody. Kierując się pasją do żeglarstwa i zaangażowaniem w zapewnianie wyjątkowej obsługi, staramy się przekraczać oczekiwania naszych gości, oferując czartery jachtów szyte na miarę, dostosowane do Państwa życzeń. Dołącz do nas i wypłyń w stronę nowych horyzontów, gdzie każda podróż jest okazją do tworzenia cennych wspomnień i doświadczenia magii morza. Witamy na pokładzie!",
        block3: "Oferta",
        block4: "Galeria",
        block5: "Kontakt",
      }
    }


  props.language === "Polski"
  ? (content = content.Polski)
  : (content = content.English);

  return (
    <div id='gallery' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{content.block1}</h2>
          <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}
