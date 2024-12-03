import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPersonSkiing, faPersonSnowboarding, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

library.add( faPersonSkiing, faPersonSnowboarding, faPeopleGroup)

export const Services = (props) => {
  return (
    <div id='oferta' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Oferta</h2>
          <p>
          Prowadzimy lekcje narciarstwa zjazdowego oraz jazdy na snowboardzie, skierowane zarówno do dzieci, jak i dorosłych. Poziom trudności zajęć jest starannie dostosowany do wieku oraz poziomu zaawansowania każdego kursanta, co zapewnia maksymalny komfort i efektywność nauki.
          </p>
          <p className='title-oferta'>⛷️Zajęcia dla każdego</p>
          <p>W naszej ofercie znajdziecie lekcje zarówno dla narciarskich i snowboardowych nowicjuszy, jak i zajęcia z doskonalenia techniki jazdy. Niezależnie od tego, czy stawiacie pierwsze kroki na stoku, czy chcecie podnieść swoje umiejętności na wyższy poziom, nasze zajęcia są dla Was idealnym wyborem.</p>
          <p className='title-oferta'>📍Lokalizacja</p>
          <p>Zajęcia prowadzimy na kieleckim Stadionie - Góra Pierściennica, co zapewnia doskonałe warunki do nauki i doskonalenia umiejętności narciarskich oraz snowboardowych. To malownicze miejsce oferuje trasy idealne dla osób początkujących, jak i doskonalących technikę.</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <div className='icon'>
                  <FontAwesomeIcon icon={d.icon}/>
                  </div>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
