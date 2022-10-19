export const Contact = (props) => {

  return (
    <div>
      <div id='kontakt'>
        <div className='container'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='row'>
              <div className='section-title'>
                <h2>Kontakt</h2>
                <p>
                 W sezonie zimowym jesteśmy do dyspozycji codziennie, od 10:00 do 22:00.
                </p>
              </div>

              <div className='contact-info'>
            <div className='contact-item'>
             
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adres
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefon
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>

            <div className='social'>
                <ul>
                  <li>
                    <a href='https://pl-pl.facebook.com/people/Centrum-Sportowo-Rekreacyjne-Stadion/100054673350132/'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
          </div>
              
            </div>
          </div>
         
          
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 SnowSchool
            <a href='https://github.com/ingakoz' rel='nofollow'> {" "}
              ikoz
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
