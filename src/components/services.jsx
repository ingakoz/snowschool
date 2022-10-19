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
          Prowadzimy lekcje narciarstwa zjazdowego i jazdy na snowboardzie, dla dzieci i dorosłych. 
          Poziom trudności zajęć dostosowany jest do wieku oraz poziomu zaawansowania kursanta. 
          W oferie znajdziecie lekcje dla narciarskich i snowboardowych nowicjuszy, jak i lekcje doskonalenia techniki jazdy.
          </p>
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
