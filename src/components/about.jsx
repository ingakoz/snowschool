export const About = (props) => {
  let content = {
    English: {
      block1: "About Us",
      block2: "Welcome to Sea Escape Yacht Charters, where luxury meets adventure on the high seas. We are dedicated to providing unforgettable experiences for those seeking the ultimate maritime escapade. At Sea Escape, we believe that the ocean has an unparalleled ability to inspire, rejuvenate, and connect people to the beauty of the natural world. With a passion for sailing and a commitment to exceptional service, we strive to exceed the expectations of our guests, offering bespoke yacht charters tailored to your desires. Join us as we set sail for new horizons, where every journey is an opportunity to create cherished memories and experience the magic of the sea. Welcome aboard!",
      block3: "Offer",
      block4: "Gallery",
      block5: "Contact",
    },
    Polski: {
        block1: "O nas",
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
    <div id="aboutus">
      <div className="mb-4">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/cranchi_wheel.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{content.block1}</h2>
              <p>{content.block2}</p>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
