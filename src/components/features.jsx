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
            <h4>
                Zachęcamy do zapoznania się z ofertą turnusów narciarskich i snowboardowych
                <br></br>dla dzieci i młodzieży w wieku od 5 do 12 lat, organizowanych w czasie ferii zimowych!
            </h4>
            <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
            <Image
                title={"Zapisy nadal trwają!"}
                largeImage={"./img/cennik/ferie.png"}
                smallImage={"./img/cennik/ferie.png"}
            />
            </div>
            </div>
        </div>
    );
};
