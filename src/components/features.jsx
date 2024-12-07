import { Image } from "./image";

export const Features = (props) => {
    return (
        <div id="cennik" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Cennik</h2>
                    {props.data
                        ? props.data.map((d, i) => (
                              <div key={`${d.title}-${i}`} className="col-12">
                                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                              </div>
                          ))
                        : "Loading..."}
                </div>
            </div>
            <div className="col-md-10 col-md-offset-1 section-title">
                <h2 className="grupowe-title">Oferta na ferie zimowe - Zajęcia grupowe dla dzieci</h2>
                <p>Zapraszamy do zapoznania się z naszą wyjątkową ofertą turnusów narciarskich i snowboardowych dla dzieci i młodzieży w wieku od 5 do 12 lat, organizowanych podczas ferii zimowych! To doskonała okazja, aby spędzić zimowy czas aktywnie, ucząc się i doskonaląc umiejętności na stoku w towarzystwie rówieśników. Nasze zajęcia grupowe to nie tylko nauka i zabawa, ale także budowanie nowych przyjaźni i niezapomniane wspomnienia z zimowych ferii!</p>
                <p className="cennik-zapisy title-zapisy">🖊️Zapisy:</p>
                <p className="cennik-zapisy">W celu zapisania dziecka na turnus, prosimy o wysłanie maila na adres: info@snowschool-kielce.com</p>
                <ul className="zapisy-ul"><p>W treści wiadomości należy podać:</p>
                          <li>⭐Imię i nazwisko dziecka</li>
                          <li>⭐Data turnusu</li>
                          <li>⭐Telefon kontaktowy do rodzica/ opiekuna</li>
                          <li>⭐Stopień zaawansowania tj. czy dziecko kiedykolwiek jeździło na nartach/desce; czy wjeżdża samodzielnie orczykiem; czy potrafi hamować</li>
                          <li>⭐Czy dziecko posiada własny sprzęt czy będzie korzystało z wypożyczalni</li>
                          </ul>
            </div>
            
            <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
            <Image
                title={"Zapisy trwają!"}
                largeImage={"./img/cennik/ferie.png"}
                smallImage={"./img/cennik/ferie.png"}
            />
            </div>
            </div>
        </div>
    );
};
