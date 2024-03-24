import { Fragment } from "react";
import { Image } from "./image";

export const Features = (props) => {

    let content = {
        English: {
          block1: "Fleet",
          block2: "Step aboard the Cranchi Atlantique 40, a maritime gem that seamlessly combines elegance and performance. This 11.83-meter yacht, with a width of 3.83 meters, offers a luxurious escape on the open seas. Manufactured in 2000, the Cranchi Atlantique 40 boasts timeless design and modern amenities, promising an unforgettable journey for those who seek both comfort and adventure. Prepare to embark on a nautical experience like no other, where every detail of this vessel reflects the spirit of refined seafaring.",
          block3: "Offer",
          block4: "Gallery",
          block5: "Contact",
        },
        Polski: {
            block1: "Flota",
            block2: "Wejdź na pokład Cranchi Atlantique 40, morskiego klejnotu, który płynnie łączy elegancję i wydajność. Ten jacht o długości 11,83 m i szerokości 3,83 m oferuje luksusową ucieczkę na otwarte morze. Wyprodukowany w 2000 roku Cranchi Atlantique 40 może pochwalić się ponadczasowym designem i nowoczesnymi udogodnieniami, zapewniając niezapomnianą podróż tym, którzy szukają zarówno komfortu, jak i przygody. Przygotuj się na wyprawę morską jak żadna inna, gdzie każdy szczegół tego statku odzwierciedla ducha wyrafinowanego żeglarstwa.",
            block3: "Oferta",
            block4: "Galeria",
            block5: "Kontakt",
          }
        }
    
    
      props.language === "Polski"
      ? (content = content.Polski)
      : (content = content.English);
    
    return (
        <div id="fleet" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2 className="fleet-title">{content.block1}</h2>
                    <p className="fleet-content">
                        {content.block2}
                    </p>

                    {props.data
              ? <Fragment>
                
              <div className='col-sm-12 col-md-12 col-lg-12'>
              <Image className="fleet-main-pic" largeImage={props.data[9].largeImage} smallImage={props.data[9].smallImage} />
            </div>
            </Fragment>
              
              : 'Loading...'}


                    
                </div>
            </div>
            
        </div>
    );
};
